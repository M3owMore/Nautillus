# Generated by Django 4.1.6 on 2023-04-24 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0007_remove_course_requirements_remove_course_silabus'),
        ('users', '0018_newuser_friends'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='friends',
            field=models.ManyToManyField(blank=True, to='courses.course'),
        ),
    ]
