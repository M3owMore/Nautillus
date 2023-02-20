from django.db import models
from django.utils import timezone

class Course(models.Model):
    title = models.TextField(max_length=1000)
    description = models.TextField(max_length=5000000)
    date_created = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title