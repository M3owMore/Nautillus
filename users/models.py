from django.db import models
from django.utils import timezone 
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from courses.models import Course
from django.core.validators import MinLengthValidator

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, user_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, password, **other_fields)

    def create_user(self, email, user_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

# kursebia dasamatebeli sadac iqneba open time romelic shinaxavs bolo gaxsnis dros da imis mixedvit dasortavs
class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=20, unique=True, validators=[MinLengthValidator(3)])
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_banned = models.BooleanField(default=False)
    friends = models.ManyToManyField('self', blank=True)
    profile_picture = models.IntegerField(blank=True, default=False)
    xp = models.IntegerField(blank=True, default=0)
    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    def __str__(self):
        return self.user_name


class UserCourse(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    opened_at = models.DateTimeField(default=timezone.now)
    purchased_at = models.DateTimeField(default=timezone.now)
    

class Notification(models.Model):
    title = models.TextField(max_length=1000)
    content = models.TextField(max_length=5000000)
    date_created = models.DateTimeField(default=timezone.now)


class UserCoursePage(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    page = models.IntegerField(null=True, default=1)


class PromoCode(models.Model):
    promo_code = models.TextField(max_length=5000000)
    sale = models.IntegerField(blank=True, null=True)
    people = models.IntegerField(blank=True, null=True)
    date_created = models.DateTimeField(default=timezone.now)


class UserPromoCode(models.Model):
    promo_code = models.ForeignKey(PromoCode, on_delete=models.CASCADE)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    date_created = models.DateTimeField(default=timezone.now)

    
class UserClickNotification(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    date_created = models.DateTimeField(default=timezone.now)
    
class ReportUser(models.Model):
    reporter = models.ForeignKey(NewUser, on_delete=models.CASCADE, related_name='reporter')
    reported = models.ForeignKey(NewUser, on_delete=models.CASCADE, related_name='reported')
    cause = models.TextField(max_length=15000)
    date_created = models.DateTimeField(default=timezone.now)
