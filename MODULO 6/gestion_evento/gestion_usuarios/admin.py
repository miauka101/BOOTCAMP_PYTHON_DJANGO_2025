from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Registrar CustomUser usando la configuración de UserAdmin
admin.site.register(CustomUser, UserAdmin)
