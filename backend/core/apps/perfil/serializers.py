from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserProfileViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'