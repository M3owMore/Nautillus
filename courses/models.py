from django.db import models
from django.utils import timezone

class Course(models.Model):
    title = models.TextField(max_length=100)
    requirements = models.TextField(max_length=150)
    silabus = models.TextField(max_length=500)
    description = models.TextField(max_length=500)
    date_created = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title