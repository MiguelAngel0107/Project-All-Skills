from django.contrib import admin
from .models import BlogComment, BlogPost, Image
# Register your models here.

admin.site.register(BlogComment)
admin.site.register(BlogPost)
admin.site.register(Image)