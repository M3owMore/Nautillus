# Generated by Django 4.1.6 on 2023-11-14 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0025_course_level_geo'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='topics_geo',
            field=models.TextField(blank=True, max_length=5000000),
        ),
    ]