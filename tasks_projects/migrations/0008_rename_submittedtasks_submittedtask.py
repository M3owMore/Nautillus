# Generated by Django 4.1.6 on 2024-02-27 20:15

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tasks_projects', '0007_submittedtasks'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SubmittedTasks',
            new_name='SubmittedTask',
        ),
    ]
