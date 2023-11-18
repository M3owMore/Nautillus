# Generated by Django 4.1.6 on 2023-11-12 19:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0044_alter_newuser_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='user_name',
            field=models.CharField(max_length=20, unique=True, validators=[django.core.validators.MinLengthValidator(3)]),
        ),
    ]
