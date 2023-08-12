# Generated by Django 4.1.6 on 2023-08-11 19:17

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0028_usercourse_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='friend_request',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
