import requests
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserAccountSerializer
from apps.perfil.models import UserProfile
from .models import UserAccount


from google.oauth2 import id_token
from rest_framework.generics import GenericAPIView
from google.auth.transport import requests as requests_google
from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()
GOOGLE_OAUTH2_CLIENT_ID = settings.GOOGLE_OAUTH2_CLIENT_ID

# import pywhatkit
# from datetime import datetime


class UserAccountCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = request.data
        if (data['password'] != data['re_password']):
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserAccountSerializer(data=data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data['password']
            name = serializer.validated_data.get('name')
            wallet_address = serializer.validated_data.get('wallet_address')

            user = UserAccount.objects.create_user(
                email=email, password=password, name=name, wallet_address=wallet_address)

            # ora_actual = datetime.now()
            # hora = hora_actual.strftime('%H')
            # minutos = hora_actual.strftime('%M')
            # hora = int(hora)
            # minutos = int(minutos)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GoogleLoginView(GenericAPIView):
    def post(self, request):
        token = request.data.get('token')
        try:
            id_info = id_token.verify_oauth2_token(
                token, requests_google.Request(), GOOGLE_OAUTH2_CLIENT_ID)

            if id_info['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            # Extraer los datos del usuario de id_info y crear un nuevo usuario en tu sistema si no existe ya
            # ...

            return Response({'message': 'Successfully logged in with Google.'}, status=status.HTTP_200_OK)
        except ValueError:
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)


# Modificacion de Token JWT


class CreateTokenWithEmailOrWallet(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):

        data = request.data
        try:
            if data.get('email'):
                email = data.get('email')
                password = data.get('password')
                try:
                    user = User.objects.get(email=email)
                except:
                    raise ValueError(
                        "No se encontró un usuario con ese correo electrónico")
            elif data.get('wallet_address'):
                wallet_address = data.get('wallet_address')
                password = data.get('password')
                try:
                    user = User.objects.get(wallet_address=wallet_address)
                except:
                    raise ValueError(
                        "No se encontró un usuario con esta wallet")
            else:
                raise ValueError("Falta Datos, EMAIL o WALLET_ADDRESS")
        except:
            raise ValueError("Falta Datos, EMAIL o WALLET_ADDRESS")

        body = {'id': user.id, 'password': password}
        res = requests.post(
            'http://localhost:8000/api/token/generate/', data=body)

        if res.status_code == 200:
            # Si la petición fue exitosa, devolver la respuesta en un HttpResponse
            return Response(res.json(), status=status.HTTP_200_OK)
        else:
            # Si la petición no fue exitosa, devolver un HttpResponse con un mensaje de error
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)



