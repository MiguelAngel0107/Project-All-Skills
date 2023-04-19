from django.contrib import admin
from .models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'picture', 'banner', 'verified',
                    'coins')
    list_display_links = (
        'user',
        'picture',
        'banner'
    )


admin.site.register(UserProfile, UserProfileAdmin)
