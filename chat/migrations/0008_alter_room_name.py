# Generated by Django 4.1.6 on 2023-04-30 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0007_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='name',
            field=models.TextField(max_length=100, unique=True),
        ),
    ]