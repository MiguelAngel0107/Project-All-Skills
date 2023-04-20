from django.urls import path
from .views import GoogleLoginView, UserAccountCreateView

urlpatterns = [
    path("register/", UserAccountCreateView.as_view()),
    path('google-auth/', GoogleLoginView.as_view()),
]
