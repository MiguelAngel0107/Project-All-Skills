from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from apps.perfil.models import UserProfile


class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = request.data
        if (data['password'] != data['re_password']):
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            UserProfile.objects.create(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
