from django.db import models
from django.utils import timezone 
from courses.models import CourseGroup

class Task(models.Model):
    content = models.TextField()
    code = models.TextField(blank=True)
    answers = models.TextField()
    lesson = models.ForeignKey(CourseGroup, on_delete=models.SET_NULL, null=True)
    date_created = models.DateTimeField(default=timezone.now)

class TaskGeo(models.Model):
    content = models.TextField()
    code = models.TextField(blank=True)
    answers = models.TextField()
    lesson = models.ForeignKey(CourseGroup, on_delete=models.SET_NULL, null=True)
    date_created = models.DateTimeField(default=timezone.now)
