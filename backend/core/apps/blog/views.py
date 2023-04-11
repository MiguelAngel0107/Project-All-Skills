from django.shortcuts import render, redirect
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from django.views.generic.edit import UpdateView, DeleteView
from django.urls.base import reverse_lazy
from django.views.generic import View
from django.http import HttpResponseRedirect


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.parsers import FileUploadParser, MultiPartParser


from .serializers import SocialCommentSerializer, SocialPostSerializer, BlogPostCreateSerializer
from .models import BlogComment, BlogPost, Image
from .forms import SocialCommentForm


class PostCreateView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    def post(self, request, format=None):
        files = request.data.getlist('image')
        data = self.request.data
        if not files :
            return Response({"Error":"Agrega al menos una imagen"}, status=status.HTTP_404_BAD_REQUEST)

        blogpost_serializer = BlogPostCreateSerializer(data=data)
        if blogpost_serializer.is_valid():
            blogpost = blogpost_serializer.save(author=request.user)
            print(files)
            for f in files:
                img = Image(image=f)
                img.save()
                blogpost.image.add(img)
            
            blogpost.save()
            return Response({"Type":'Success'}, status=status.HTTP_201_CREATED)
                
        return Response({"Type":"Error"}, status=status.HTTP_400_BAD_REQUEST)

class DeleteImagesOfPost(APIView):
    permission_classes=(permissions.IsAuthenticated,)
    def get(self, request, pk):
        #files = request.data.getlist('image')
        #Falta aumentar que solo el author puede borrar imagenes de su post
        data = self.request.data
        if not data:
            blogDelete = BlogPost.objects.get(pk=pk)
            images = blogDelete.image.all()
            for image in images:
                image.delete()
            return Response({"Todo Borrado":""}, status=status.HTTP_200_OK)
        else:
            return Response({"Falta Borrado":""}, status=status.HTTP_404_NOT_FOUND)

class PostDetailView(APIView):
    permission_classes = [permissions.AllowAny,]
    def get(self, request):
        posts = BlogPost.objects.all().order_by('-id')
        data = []
        for post in posts:
            images = post.image.all()
            image_urls = [image.image.url for image in images]
            post_data = {
                "id": post.id,
                "body": post.body,
                "created_on": post.created_on,
                "author": post.author.name,
                "likes": post.likes.count(),
                "dislikes": post.dislikes.count(),
                "image_urls": image_urls
            }
            data.append(post_data)
        return Response(data, status=status.HTTP_202_ACCEPTED)






class PostDetailViewB(APIView):
    def get(self, request, pk):
        post = BlogPost.objects.get(pk=pk)

        #form = SocialCommentForm()
        serializer = SocialCommentSerializer()

        comments = BlogComment.objects.filter(
            post=post).order_by('-created_on')
        # New
        comment_serializer = SocialCommentSerializer(comments, many=True)

        return Response({
            'post': serializer.data,
            'comments': comment_serializer.data
        })

    def post(self, request, pk):
        post = BlogPost.objects.get(pk=pk)

        form = SocialCommentForm(request.POST)

        if form.is_valid():
            new_comment = form.save(commit=False)
            new_comment.author = request.user
            new_comment.post = post
            new_comment.save()

        comments = BlogComment.objects.filter(
            post=post).order_by('-created_on')

        context = {
            'post': post,
            'form': form,
            'comments': comments
        }

        return render(request, 'pages/social/detail.html', context)

class PostEditView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):

    model = BlogPost
    fields = ['body']
    template_name = 'pages/social/edit.html'

    def get_success_url(self):
        pk = self.kwargs['pk']
        return reverse_lazy('social:post-detail', kwargs={'pk': pk})

    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author

class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):

    model = BlogPost
    template_name = 'pages/social/delete.html'
    success_url = reverse_lazy('home')

    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author

class AddLike(LoginRequiredMixin, View):
    def post(self, request, pk, *args, **kwargs):
        post = BlogPost.objects.get(pk=pk)

        is_dislike = False

        for dislike in post.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break

        if is_dislike:
            post.dislikes.remove(request.user)

        is_like = False
        for like in post.likes.all():
            if like == request.user:
                is_like = True
                break

        if not is_like:
            post.likes.add(request.user)

        if is_like:
            post.likes.remove(request.user)

        next = request.POST.get('next', '/')
        return HttpResponseRedirect(next)

class AddDislike(LoginRequiredMixin, View):
    def post(self, request, pk, *args, **kwargs):
        post = BlogPost.objects.get(pk=pk)

        is_like = False

        for like in post.likes.all():
            if like == request.user:
                is_like = True
                break

        if is_like:
            post.likes.remove(request.user)

        is_dislike = False
        for dislike in post.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break

        if not is_dislike:
            post.dislikes.add(request.user)

        if is_dislike:
            post.dislikes.remove(request.user)

        next = request.POST.get('next', '/')
        return HttpResponseRedirect(next)

class AddCommentLike(LoginRequiredMixin, View):
    def post(self, request, pk, *args, **kwargs):
        comment = BlogComment.objects.get(pk=pk)

        is_dislike = False
        for dislike in comment.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break

        if is_dislike:
            comment.dislikes.remove(request.user)

        is_like = False
        for like in comment.likes.all():
            if like == request.user:
                is_like = True
                break

        if not is_like:
            comment.likes.add(request.user)

        if is_like:
            comment.likes.remove(request.user)

        next = request.POST.get('next', '/')
        return HttpResponseRedirect(next)

class AddCommentDislike(LoginRequiredMixin, View):
    def post(self, request, pk, *args, **kwargs):
        comment = BlogComment.objects.get(pk=pk)

        is_like = False
        for like in comment.likes.all():
            if like == request.user:
                is_like = True
                break

        if is_like:
            comment.likes.remove(request.user)

        is_dislike = False
        for dislike in comment.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break

        if not is_dislike:
            comment.dislikes.add(request.user)

        if is_dislike:
            comment.dislikes.remove(request.user)

        next = request.POST.get('next', '/')
        return HttpResponseRedirect(next)

class CommentReplyView(LoginRequiredMixin, View):
    def post(self, request, post_pk, pk, *args, **kwargs):
        post = BlogPost.objects.get(pk=post_pk)
        parent_comment = BlogComment.objects.get(pk=pk)
        form = SocialCommentForm(request.POST)

        if form.is_valid():
            new_comment = form.save(commit=False)
            new_comment.author = request.user
            new_comment.post = post
            new_comment.parent = parent_comment
            new_comment.save()

        return redirect('social:post-detail', pk=post_pk)
