# Generated by Django 4.1.6 on 2023-08-05 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0027_usercourse_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercourse',
            name='level',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
