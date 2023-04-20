from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from apps.perfil.models import UserProfile



from google.oauth2 import id_token
from rest_framework.generics import GenericAPIView
from google.auth.transport import requests

#import pywhatkit
#from datetime import datetime


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

            #ora_actual = datetime.now()
            #hora = hora_actual.strftime('%H')
            #minutos = hora_actual.strftime('%M')
            #hora = int(hora)
            #minutos = int(minutos)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





class GoogleLoginView(GenericAPIView):
    def post(self, request):
        token = request.data.get('token')
        try:
            id_info = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_OAUTH2_CLIENT_ID)

            if id_info['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            # Extraer los datos del usuario de id_info y crear un nuevo usuario en tu sistema si no existe ya
            # ...

            return Response({'message': 'Successfully logged in with Google.'}, status=status.HTTP_200_OK)
        except ValueError:
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)