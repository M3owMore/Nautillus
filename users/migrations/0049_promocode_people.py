# Generated by Django 4.1.6 on 2023-11-22 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0048_promocode_sale'),
    ]

    operations = [
        migrations.AddField(
            model_name='promocode',
            name='people',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
