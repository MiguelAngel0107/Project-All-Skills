from django.urls import path
from .views import PostCreateView, DeleteImagesOfPost, PostDetailView, BlogPostDeleteView
from .views import AddDislike, AddLike, AddLikeOrDislike

app_name = "apps.blog"

urlpatterns = [
    path("post/create/", PostCreateView.as_view()),
    path("post/delete/images/<int:pk>/", DeleteImagesOfPost.as_view()),
    path("post/view-all/", PostDetailView.as_view()),
    path('post/<int:pk>/delete/', BlogPostDeleteView.as_view()),
    path("post/add-like-or-dislike/", AddLikeOrDislike.as_view())

]
