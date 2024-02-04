from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

class Course(models.Model):
    title = models.TextField(max_length=1000)
    level = models.TextField(max_length=500, blank=True)
    level_geo = models.TextField(max_length=500, blank=True)
    description = models.TextField(max_length=5000000)
    description_geo = models.TextField(max_length=5000000, blank=True)
    big_description = models.TextField(blank=True) 
    big_description_geo = models.TextField(blank=True) 
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, default=False)
    price_geo = models.DecimalField(max_digits=10, decimal_places=2, blank=True, default=False)
    real_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, default=False)
    date_created = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.title
    

class CourseGroup(models.Model):
    title = models.TextField(max_length=1000)
    keyword = models.CharField(max_length=200, blank=True)
    main_text = models.TextField(blank=True)
    main_text_geo = models.TextField(blank=True)
    code = models.TextField(blank=True) 
    date_created = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.keyword:
            self.keyword = self.title.split(' ')[0]
        super(CourseGroup, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title

# class CourseGroupImage(models.Model):
#     course = models.ForeignKey(CourseGroup, on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='image/', blank=True)

    
