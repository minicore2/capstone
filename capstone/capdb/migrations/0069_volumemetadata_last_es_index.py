# Generated by Django 2.2.2 on 2019-07-08 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0068_auto_20190628_1922'),
    ]

    operations = [
        migrations.AddField(
            model_name='volumemetadata',
            name='last_es_index',
            field=models.DateTimeField(blank=True, help_text='Last time cases for this volume were successfully indexed by ElasticSearch', null=True),
        ),
    ]
