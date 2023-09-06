from django.db import models
from django.utils import timezone 
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from courses.models import Course

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
    user_name = models.CharField(max_length=150, unique=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    friends = models.ManyToManyField('self', blank=True)
    profile_picture = models.IntegerField(blank=True, default=False)
    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    def __str__(self):
        return self.user_name


class UserCourse(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.TextField(max_length=1000, blank=True)
    level = models.TextField(max_length=1000, blank=True)
    opened_at = models.DateTimeField(default=timezone.now)
    purchased_at = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.title:
            self.title = self.course.title
        if not self.level:
            self.level = self.course.level
        super(UserCourse, self).save(*args, **kwargs)