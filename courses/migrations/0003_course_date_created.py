# Generated by Django 4.1.6 on 2023-02-10 10:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_rename_courses_course'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]