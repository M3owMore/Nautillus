# Generated by Django 4.1.6 on 2023-09-12 18:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0017_alter_disconnecttime_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disconnecttime',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2023, 9, 12, 18, 51, 11, 109673, tzinfo=datetime.timezone.utc)),
        ),
    ]