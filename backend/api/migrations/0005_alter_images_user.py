# Generated by Django 5.0.4 on 2024-04-07 05:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_images_pred_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="images",
            name="user",
            field=models.CharField(max_length=60),
        ),
    ]