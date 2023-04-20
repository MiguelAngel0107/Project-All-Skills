from django.db import models
from django.utils import timezone
from django.conf import settings
User = settings.AUTH_USER_MODEL

def user_directory_path(instance, fielname):
    return 'users/blogposts/{}'.format(fielname)


class BlogPost(models.Model):
    body=models.TextField()
    image = models.ManyToManyField('Image', blank=True, related_name='blog_post_images')
    created_on = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_post_author')
    likes = models.ManyToManyField(User, blank=True, related_name='likes')
    dislikes = models.ManyToManyField(User, blank=True, related_name='dislikes')

class Image(models.Model):
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

class BlogComment(models.Model):
    comment = models.TextField()
    created_on = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_comment_author')
    likes = models.ManyToManyField(User, blank=True, related_name='comment_likes')
    dislikes = models.ManyToManyField(User, blank=True, related_name='comment_dislikes')
    post = models.ForeignKey('BlogPost', on_delete=models.CASCADE)

    @property
    def children(self):
        return BlogComment.objects.filter(parent=self).order_by('-created_on').all()

    @property
    def is_parent(self):
        if self.parent is None:
            return True
        return False



