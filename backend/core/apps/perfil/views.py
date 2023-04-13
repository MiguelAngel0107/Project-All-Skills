from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404
from django.conf import settings

from .models import UserProfile
from .serializers import UserProfileSerializer, UserProfileViewSerializer
from apps.user.models import CustomUser
from rest_framework.parsers import MultiPartParser, FormParser

from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
# Create your views here.


class UserProfileUpdate(APIView):
    permission_classes = [permissions.IsAuthenticated,]
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):

        try:
            user = self.request.user
            data = self.request.data

            name = data.get('fullName')
            biografia = data.get('biografia')
            birthday = data.get('birthday')
            location = data.get('location')
            url = data.get('url')
        except:
            return Response(
                {'error': 'Falta archivos'},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            user_profile = UserProfile.objects.get(user=user)
            try:    

                if name != "":
                    CustomUser.objects.filter(id=user.id).update(name=name)

                if biografia != "":
                    user_profile.bio = biografia

                if birthday != "":
                    user_profile.birthday = birthday

                if location != "":
                    user_profile.location = location

                if url != "":
                    user_profile.url = url

                try:
                    # Actualizar imagen de perfil
                    picture_file = request.FILES.get('picture')
                    if picture_file:
                        if user_profile.picture:
                            default_storage.delete(user_profile.picture.path)

                        user_profile.picture = picture_file

                    # Actualizar imagen de portada
                    banner_file = request.FILES.get('banner')
                    if banner_file:
                        if user_profile.banner:
                            default_storage.delete(user_profile.banner.path)

                        user_profile.banner = banner_file

                    user_profile.save()
                except:
                    return Response(
                        {'error': 'Esta mal las Imagens Error'},
                        status=status.HTTP_402_PAYMENT_REQUIRED
                    )

            except:
                return Response(
                    {'error': 'Something went wrong when updating profile'},
                    status=status.HTTP_507_INSUFFICIENT_STORAGE
                )

            user_profile_serializer = UserProfileSerializer(user_profile)
            user_profile_data = user_profile_serializer.data

            user_profile_data['fullname'] = user_profile.user.name
            user_profile_data['email'] = user_profile.user.email

            return Response(
                user_profile_data,
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when updating profile'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserProfileUpdateEcommerce(APIView):
    permission_classes = [permissions.IsAuthenticated,]

    def put(self, request, format=None):

        try:
            user = self.request.user
            data = self.request.data

            address_line_1 = data['address_line_1']
            address_line_2 = data['address_line_2']
            city = data['city']
            state_province_region = data['state_province_region']
            zipcode = data['zipcode']
            phone = data['phone']
            country_region = data['country_region']
        except:
            return Response(
                {'error': 'Falta archivos'},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            UserProfile.objects.filter(user=user).update(
                address_line_1=address_line_1,
                address_line_2=address_line_2,
                city=city,
                state_province_region=state_province_region,
                zipcode=zipcode,
                phone=phone,
                country_region=country_region,

            )

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            user_profile_data = user_profile.data

            return Response(
                user_profile_data,
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when updating profile'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserViewData(APIView):
    permission_classes = [permissions.IsAuthenticated,]

    def get(self, request):
        user = self.request.user

        try:
            user_profile_object = UserProfile.objects.get(user=user)
            user_profile = UserProfileViewSerializer(user_profile_object)

            user_profile_data = user_profile.data
            user_profile_data['fullname'] = user.name
            user_profile_data['email'] = user.email

            return Response(
                user_profile_data,
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when updating profile'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
