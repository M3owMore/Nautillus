# Generated by Django 4.1.6 on 2023-05-07 17:25

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0010_rename_reseiver_message_receiver'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='accessed_users',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
