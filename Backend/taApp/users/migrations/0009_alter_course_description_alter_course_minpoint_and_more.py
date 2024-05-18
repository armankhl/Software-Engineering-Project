# Generated by Django 5.0.6 on 2024-05-17 20:25

import users.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_remove_course_num_applicants_remove_course_num_tas_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.TextField(verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='course',
            name='minPoint',
            field=models.IntegerField(verbose_name='minimum points'),
        ),
        migrations.AlterField(
            model_name='course',
            name='passCourse',
            field=users.models.ZeroOrOneField(validators=[users.models.validate_zero_or_one], verbose_name='should pass'),
        ),
    ]
