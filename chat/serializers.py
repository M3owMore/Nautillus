from rest_framework import serializers
from .models import Room
from django.conf import settings
from users.models import NewUser


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('__all__')


class UserFriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('id', 'user_name')