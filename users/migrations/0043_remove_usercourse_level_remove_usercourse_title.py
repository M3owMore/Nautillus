# Generated by Django 4.1.6 on 2023-11-11 19:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0042_remove_usercourse_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usercourse',
            name='level',
        ),
        migrations.RemoveField(
            model_name='usercourse',
            name='title',
        ),
    ]
