from django.urls import path
from .views import RegisterView , GoogleLoginView

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path('google-auth/', GoogleLoginView.as_view()),
]