from django.contrib import admin
from . import models
from django.contrib.admin import ModelAdmin


class TaskAdminConfig(ModelAdmin):
    model = models.Task
    search_fields = ('lesson',)
    list_display = ('lesson', 'id', 'content')

class TaskGeoAdminConfig(ModelAdmin):
    model = models.TaskGeo
    search_fields = ('lesson',)
    list_display = ('lesson', 'id', 'content')


admin.site.register(models.Task, TaskAdminConfig)
admin.site.register(models.TaskGeo, TaskGeoAdminConfig)

