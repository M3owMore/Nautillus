from django.urls import path, include
from .views import (UploadTasks, ReturnTasks, CheckTasks, ReturnMarkTasks, CheckMarkTasks)

app_name = 'tasks_projects'

urlpatterns = [
    path('upload/', UploadTasks.as_view(), name='upload'),
    path('tasks/', ReturnTasks.as_view(), name='return-tasks'),
    path('tasks/check', CheckTasks.as_view(), name='check-tasks'),
    path('mark-tasks/', ReturnMarkTasks.as_view(), name='return-mark-tasks'),
    path('mark-tasks/check', CheckMarkTasks.as_view(), name='check-mark-tasks'),
]