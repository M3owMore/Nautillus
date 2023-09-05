from django.contrib import admin
from . import models
from django.contrib.admin import ModelAdmin


class CourseGroupAdminConfig(ModelAdmin):
    model = models.CourseGroup
    list_display = ('title', 'id')

admin.site.register(models.Course)
admin.site.register(models.CourseGroup, CourseGroupAdminConfig)