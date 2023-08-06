from django.contrib import admin
from .models import Message, Room
from django.contrib.admin import ModelAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models

class RoomAdminConfig(ModelAdmin):
    model = Room
    list_display = ('name', 'id')

class MessageAdminConfig(ModelAdmin):
    model = Message
    list_display = ('sender', 'id')

admin.site.register(Message, MessageAdminConfig)
admin.site.register(Room, RoomAdminConfig)

