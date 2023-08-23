from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

class Course(models.Model):
    title = models.TextField(max_length=1000)
    level = models.TextField(max_length=500, blank=True)
    description = models.TextField(max_length=5000000)
    big_description = models.TextField(blank=True) 
    topics = models.TextField(max_length=5000000, blank=True)
    main_text = models.TextField(blank=True) 
    date_created = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title
    

class CourseGroup(models.Model):
    title = models.TextField(max_length=1000)
    main_text = models.TextField(blank=True) 
    date_created = models.DateTimeField(default=timezone.now)
    