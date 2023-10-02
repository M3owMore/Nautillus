from django.contrib import admin
from .models import Blog
from django.contrib.admin import ModelAdmin


class BlogAdminConfig(ModelAdmin):
    model = Blog
    list_display = ('title', 'id')

admin.site.register(Blog, BlogAdminConfig)
