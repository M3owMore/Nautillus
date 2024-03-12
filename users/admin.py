from django.contrib import admin
from users.models import NewUser
from users.models import UserCourse, Notification, UserCoursePage, PromoCode, UserPromoCode, UserClickNotification, ReportUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models
from django.contrib.admin import ModelAdmin
# from rest_framework_simplejwt.token_blacklist.models import OutstandingToken 
# from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin 


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'user_name')
    list_filter = ('email', 'user_name', 'is_active', 'is_staff', "is_banned", "xp")
    ordering = ('-start_date',)
    list_display = ('email','id', 'user_name',
                    'is_active', 'is_staff', "is_banned", "xp")
    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'profile_picture', "xp")}),
        ('Permissions', {'fields': ('is_staff', 'is_active', "is_banned", "groups")}),
        ('Personal', {'fields': ('about', 'friends', 'start_date')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff', "is_banned", "xp")}
         ),
    )

class UserCourseAdminConfig(ModelAdmin):
    model = UserCourse
    list_display = ('course', 'user', 'id')


class NotificationAdminConfig(ModelAdmin):
    model = Notification
    list_display = ('title', 'id')

class UserCoursePageAdminConfig(ModelAdmin):
    model = UserCoursePage
    list_display = ('user', 'course', 'page')

class PromoCodeAdminConfig(ModelAdmin):
    model = PromoCode
    list_display = ('promo_code', 'id')

class UserPromoCodeAdminConfig(ModelAdmin):
    model = UserPromoCode
    list_display = ('promo_code', 'user', 'id')

class UserClickNotificationAdminConfig(ModelAdmin):
    model = UserClickNotification
    list_display = ('user', 'id')

class ReportUserAdminConfig(ModelAdmin):
    model = ReportUser
    list_display = ('reporter', 'reported', 'id')

# class OutstandingTokenAdminConfig(OutstandingTokenAdmin):
#     def has_delete_permission(self, *args, **kwargs):
#         return True

# admin.site.unregister(OutstandingToken)
# admin.site.register(OutstandingToken, OutstandingTokenAdminConfig)

admin.site.register(NewUser, UserAdminConfig)
admin.site.register(UserCourse, UserCourseAdminConfig)
admin.site.register(Notification, NotificationAdminConfig)
admin.site.register(UserCoursePage, UserCoursePageAdminConfig)
admin.site.register(PromoCode, PromoCodeAdminConfig)
admin.site.register(UserPromoCode, UserPromoCodeAdminConfig)
admin.site.register(UserClickNotification, UserClickNotificationAdminConfig)
admin.site.register(ReportUser, ReportUserAdminConfig)
