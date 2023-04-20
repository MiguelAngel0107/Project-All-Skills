from django.contrib import admin
from .models import UserAccount


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name', 'is_active',
                    'is_staff', 'date_joined', 'wallet_address')
    search_fields = ( 'first_name', 'last_name')


admin.site.register(UserAccount, UserAdmin)