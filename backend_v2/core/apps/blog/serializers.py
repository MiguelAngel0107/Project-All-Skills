from rest_framework import serializers
from .models import BlogPost, BlogComment, Image

class BlogPostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('body',)




class SocialPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = "__all__"

class SocialCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogComment
        fields = ['comment']



    
