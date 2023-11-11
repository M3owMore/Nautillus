from django.contrib import admin
from .models import Message, Room, FriendRequest, DisconnectTime, ConnectTime
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

class RequestAdminConfig(ModelAdmin):
    model = Message
    list_display = ('sender', 'receiver', 'id')

class DisconnectTimeAdminConfig(ModelAdmin):
    model = DisconnectTime
    list_display = ('user', 'room', 'id')

class ConnectTimeAdminConfig(ModelAdmin):
    model = ConnectTime
    list_display = ('user', 'room', 'id')

admin.site.register(Message, MessageAdminConfig)
admin.site.register(Room, RoomAdminConfig)
admin.site.register(FriendRequest, RequestAdminConfig)
admin.site.register(DisconnectTime, DisconnectTimeAdminConfig)
admin.site.register(ConnectTime, ConnectTimeAdminConfig)

