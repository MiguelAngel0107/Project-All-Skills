from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from apps.perfil.models import UserProfile


class UserAccountManager(BaseUserManager):
    def create_user(self, email=None, password=None, wallet_address=None, **extra_fields):
        """
        Creates and saves a new User with the given email and password.
        """

        if not email and not wallet_address:
            raise ValueError('Either email or wallet_address must be set')

        print("Existe Email o Wallet")

        if email:
            newProfile = UserProfile.objects.create()  # Crear instancia de UserProfile
            email = self.normalize_email(email)
            user = self.model(email=email, profile=newProfile, **extra_fields)

        else:
            newProfile = UserProfile.objects.create()  # Crear instancia de UserProfile
            user = self.model(wallet_address=wallet_address,
                              profile=newProfile, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)

        if user:
            from apps.cart.models import Cart
            cart = Cart.objects.create(user=user)
            cart.save()

        return user

    def create_superuser(self, email="miguelegocheaga8@gmail.com", password=None, **extra_fields):
        """
        Creates and saves a new superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        _('email address'), blank=True, null=True, unique=True)
    name = models.CharField(_('full name'), max_length=255,
                            blank=True, null=True, default="")
    is_active = models.BooleanField(_('active'), default=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    wallet_address = models.CharField(
        _('wallet address'), max_length=255, blank=True, null=True, unique=True)
    profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE)

    objects = UserAccountManager()

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = []

    def __str__(self):
        return "My ID is: " + str(self.id)

    def get_products(self):
        from apps.products.models import Product
        products = Product.objects.filter(seller=self)
        return products
