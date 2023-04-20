from rest_framework import serializers
from .models import UserAccount
from apps.perfil.models import UserProfile

class UserAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ['email', 'password', 'name', 'wallet_address']
        extra_kwargs = {'password': {'write_only': True}}
