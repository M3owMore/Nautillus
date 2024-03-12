from rest_framework import serializers
from .models import Task, MarkTask

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class MarkTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarkTask
        fields = '__all__'