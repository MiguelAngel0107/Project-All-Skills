from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404
from django.conf import settings

from .models import UserProfile
from .serializers import UserProfileSerializer, UserProfileViewSerializer
from apps.user.models import CustomUser
# Create your views here.


class UserProfileUpdate(APIView):
    permission_classes = [permissions.IsAuthenticated,]

    def put(self, request, format=None):

        try:
            user = self.request.user
            data = self.request.data

            name = data['fullName']
            picture = request.data.getlist('picture')
            banner = request.data.getlist('banner')
            print("------------------------------------------")
            print(picture)
            print(banner)
            print("------------------------------------------")
            biografia = data['biografia']
            birthday = data['birthday']
            location = data['location']
            url = data['url']
        except:
            return Response(
                {'error': 'Falta archivos'},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            CustomUser.objects.filter(id=user.id).update(name=name)
        except:
            return Response(
                {'error': 'No se pudo cambiar el nombre'},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            if birthday == "":
                UserProfile.objects.filter(user=user).update(
                    bio=biografia,
                    location=location,
                    url=url,
                    banner=banner,
                    picture=picture
                )
            else:
                UserProfile.objects.filter(user=user).update(
                    banner=banner,
                    picture=picture,
                    bio=biografia,
                    birthday=birthday,
                    location=location,
                    url=url,
                )

            user_profile_object = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile_object)

            user_profile_data = user_profile.data
            user_profile_data['fullname'] = user.name
            user_profile_data['email'] = user.email
            user_profile_data['picture'] = user_profile_object.picture.url
            user_profile_data['banner'] = user_profile_object.banner.url

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
