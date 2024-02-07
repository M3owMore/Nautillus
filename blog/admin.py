from django.contrib import admin
from .models import Blog, Comment
from django.contrib.admin import ModelAdmin


class BlogAdminConfig(ModelAdmin):
    model = Blog
    list_display = ('title', 'id')

class CommentAdminConfig(ModelAdmin):
    model = Comment
    list_display = ('blog', 'user', 'comment', 'id')

admin.site.register(Blog, BlogAdminConfig)
admin.site.register(Comment, CommentAdminConfig)
