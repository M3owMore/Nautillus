from rest_framework import serializers
from .models import Room
from django.conf import settings


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('__all__')