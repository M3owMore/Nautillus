# Generated by Django 4.1.6 on 2023-04-24 18:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_alter_newuser_friends'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newuser',
            name='friends',
        ),
    ]
