# Generated by Django 4.1.6 on 2023-09-12 18:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0022_alter_disconnecttime_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disconnecttime',
            name='time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
