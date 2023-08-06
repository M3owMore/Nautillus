from rest_framework import serializers
from .models import Course
from django.conf import settings


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'level', 'description', 'topics', 'date_created')
