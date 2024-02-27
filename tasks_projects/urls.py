from django.urls import path, include
from .views import (UploadTasks, ReturnTasks, CheckTasks)

app_name = 'tasks_projects'

urlpatterns = [
    path('upload/', UploadTasks.as_view(), name='upload'),
    path('tasks/', ReturnTasks.as_view(), name='return-tasks'),
    path('tasks/check', CheckTasks.as_view(), name='check-tasks'),
]