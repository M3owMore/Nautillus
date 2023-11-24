from django.contrib import admin
from users.models import NewUser
from users.models import UserCourse, Notification, UserCoursePage, PromoCode, UserPromoCode
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models
from django.contrib.admin import ModelAdmin



class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'user_name')
    list_filter = ('email', 'user_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('email','id', 'user_name',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'profile_picture')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', "groups")}),
        ('Personal', {'fields': ('about', 'friends', 'start_date')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff')}
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


admin.site.register(NewUser, UserAdminConfig)
admin.site.register(UserCourse, UserCourseAdminConfig)
admin.site.register(Notification, NotificationAdminConfig)
admin.site.register(UserCoursePage, UserCoursePageAdminConfig)
admin.site.register(PromoCode, PromoCodeAdminConfig)
admin.site.register(UserPromoCode, UserPromoCodeAdminConfig)
