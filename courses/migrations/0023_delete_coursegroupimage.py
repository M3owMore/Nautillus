# Generated by Django 4.1.6 on 2023-10-28 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0022_rename_coursegroupimages_coursegroupimage'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CourseGroupImage',
        ),
    ]
