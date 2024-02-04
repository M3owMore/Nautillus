from django.db import models
from django.utils import timezone 

class Blog(models.Model):
    title = models.TextField()
    content = models.TextField()
    description = models.TextField(blank=True)
    img_link = models.TextField(blank=True)
    date = models.DateTimeField(default=timezone.now)
