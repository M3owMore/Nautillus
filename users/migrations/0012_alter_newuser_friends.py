# Generated by Django 4.1.6 on 2023-04-24 18:05

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_alter_newuser_friends'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='friends',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
