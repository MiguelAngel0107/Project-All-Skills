# Generated by Django 3.2.16 on 2023-04-14 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_alter_message_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='username',
            field=models.CharField(max_length=255),
        ),
    ]