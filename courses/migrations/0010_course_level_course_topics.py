# Generated by Django 4.1.6 on 2023-08-03 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0009_delete_usercourse'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='level',
            field=models.TextField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='course',
            name='topics',
            field=models.TextField(blank=True, max_length=5000000),
        ),
    ]