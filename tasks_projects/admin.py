from django.contrib import admin
from . import models
from django.contrib.admin import ModelAdmin


class TaskAdminConfig(ModelAdmin):
    model = models.Task
    search_fields = ('lesson',)
    list_display = ('lesson', 'id', 'content')

class MarkTaskAdminConfig(ModelAdmin):
    model = models.MarkTask
    search_fields = ('lesson',)
    list_display = ('lesson', 'id', 'content')

# class TaskGeoAdminConfig(ModelAdmin):
#     model = models.TaskGeo
#     search_fields = ('lesson',)
#     list_display = ('lesson', 'id', 'content')
    
class SubmittedTaskAdminConfig(ModelAdmin):
    model = models.SubmittedTask
    search_fields = ('task', 'user')
    list_display = ('user', 'task', 'id')

class SubmittedMarkTaskAdminConfig(ModelAdmin):
    model = models.SubmittedMarkTask
    search_fields = ('task', 'user')
    list_display = ('user', 'task', 'id')

admin.site.register(models.Task, TaskAdminConfig)
admin.site.register(models.SubmittedTask, SubmittedTaskAdminConfig)
admin.site.register(models.MarkTask, MarkTaskAdminConfig)
admin.site.register(models.SubmittedMarkTask, SubmittedMarkTaskAdminConfig)
# admin.site.register(models.TaskGeo, TaskGeoAdminConfig)