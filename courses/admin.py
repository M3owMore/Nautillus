from django.contrib import admin
from . import models
from django.contrib.admin import ModelAdmin


class CourseGroupAdminConfig(ModelAdmin):
    model = models.CourseGroup
    search_fields = ('title',)
    list_display = ('title', 'id')

# class CourseGroupImageAdminConfig(ModelAdmin):
#     model = models.CourseGroupImage
#     search_fields = ('course',)
#     list_display = ('course', 'id')

admin.site.register(models.Course)
admin.site.register(models.CourseGroup, CourseGroupAdminConfig)
# admin.site.register(models.CourseGroupImage, CourseGroupImageAdminConfig)