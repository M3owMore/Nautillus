# Generated by Django 4.1.6 on 2023-08-14 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0030_newuser_sended_friend_request'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newuser',
            name='friend_request',
        ),
        migrations.RemoveField(
            model_name='newuser',
            name='sended_friend_request',
        ),
    ]
