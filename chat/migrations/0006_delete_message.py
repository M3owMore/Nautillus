# Generated by Django 4.1.6 on 2023-04-30 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0005_remove_room_receiver_remove_room_sender_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Message',
        ),
    ]
