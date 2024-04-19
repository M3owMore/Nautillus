from rest_framework import serializers
from .models import Course, CourseBundle
from django.conf import settings


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"

class CourseBundleSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)
    class Meta:
        model = CourseBundle
        fields = "__all__"

