from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # User
    path('user/', include('apps.user.urls')),

    # Perfil User
    path('profile/', include('apps.perfil.urls')),

    # Ecommerce
    path('ecommerce/category/', include('apps.category.urls')),
    path('ecommerce/products/', include('apps.products.urls')),

    # Blog
    path('blog/', include('apps.blog.urls')),

    # Chat
    path("chat/", include("apps.chat.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



