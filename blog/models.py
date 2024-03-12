from django.db import models
from django.utils import timezone 
from django.contrib.auth import get_user_model

User = get_user_model()

class Blog(models.Model):
    title = models.TextField()
    content = models.TextField()
    description = models.TextField(blank=True)
    img_link = models.TextField(blank=True)
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
