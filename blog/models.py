from django.db import models
from django.utils import timezone 

class Blog(models.Model):
    title = models.TextField()
    content = models.TextField()
    date = models.DateTimeField(default=timezone.now)
