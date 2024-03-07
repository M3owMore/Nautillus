from django.db import models
from django.utils import timezone 
from courses.models import CourseGroup
from users.models import NewUser

class Task(models.Model):
    content = models.TextField()
    content_geo = models.TextField(blank=True)
    code = models.TextField(blank=True)
    answers = models.TextField()
    lesson = models.ForeignKey(CourseGroup, on_delete=models.SET_NULL, null=True)
    xp = models.IntegerField(blank=True, default=5)
    date_created = models.DateTimeField(default=timezone.now)

# class TaskGeo(models.Model):
#     content = models.TextField()
#     code = models.TextField(blank=True)
#     answers = models.TextField()
#     lesson = models.ForeignKey(CourseGroup, on_delete=models.SET_NULL, null=True)
#     xp = models.IntegerField(blank=True, default=5)
#     date_created = models.DateTimeField(default=timezone.now)

class SubmittedTask(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

