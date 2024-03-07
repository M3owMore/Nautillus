from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from .models import UserCourse, Notification
from courses.models import Course, CourseGroup
from djoser.serializers import UserSerializer

User = get_user_model()

# class RegisterUserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = NewUser
#         fields = ('email', 'user_name', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)

#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'user_name', 'password')


class CourseOpenSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    level = serializers.SerializerMethodField()
    level_geo = serializers.SerializerMethodField()

    class Meta:
        model = UserCourse
        fields = ("id", "course", "user", "opened_at", "purchased_at", "title", "level", "level_geo")

    def get_title(self, obj):
        return obj.course.title if obj.course else None

    def get_level(self, obj):
        return obj.course.level if obj.course else None
    
    def get_level_geo(self, obj):
        return obj.course.level_geo if obj.course else None


class UserOpenCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseGroup
        fields = "__all__"

class ReturnLessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseGroup
        fields = ('id', 'title', 'date_created')

class ReturnUserSerializer(UserSerializer):    
    class Meta(UserSerializer.Meta):
        model = User
        read_only_fields = ('email', 'profile_picture')
        fields = ('id', 'email', 'user_name', 'profile_picture', 'xp')

class NotificationSerializer(UserSerializer):    
    class Meta(UserSerializer.Meta):
        model = Notification
        fields = "__all__"