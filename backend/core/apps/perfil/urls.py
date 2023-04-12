from django.urls import path
from .views import UserProfileUpdate, UserViewData, UserProfileUpdateEcommerce

urlpatterns = [
    path('update/', UserProfileUpdate.as_view()),
    path('update-ecommerce/', UserProfileUpdateEcommerce.as_view()),
    path('view/', UserViewData.as_view()),
]
