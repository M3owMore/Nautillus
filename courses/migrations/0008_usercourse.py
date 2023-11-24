# Generated by Django 4.1.6 on 2023-07-25 09:56

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0007_remove_course_requirements_remove_course_silabus'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCourse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opened_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
    ]
