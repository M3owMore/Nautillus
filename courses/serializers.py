from rest_framework import serializers
from .models import Course, CourseBundle, Tag
from django.conf import settings

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"

class CourseSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    class Meta:
        model = Course
        fields = "__all__"

class CourseBundleSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)
    tags = TagSerializer(many=True)
    class Meta:
        model = CourseBundle
        fields = "__all__"

