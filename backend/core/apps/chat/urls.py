# chat/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path("get/", views.ListMessages.as_view())
]