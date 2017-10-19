# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-18 15:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0010_merge_20170927_1758'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='casemetadata',
            options={'ordering': ['case_id']},
        ),
        migrations.AlterModelOptions(
            name='court',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='jurisdiction',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='reporter',
            options={'ordering': ['full_name']},
        ),
        migrations.AddField(
            model_name='jurisdiction',
            name='whitelisted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='citations',
            field=models.ManyToManyField(related_name='case_metadatas', to='capdb.Citation'),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='court',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='case_metadatas', to='capdb.Court'),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='jurisdiction',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='case_metadatas', to='capdb.Jurisdiction'),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='reporter',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='case_metadatas', to='capdb.Reporter'),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='volume',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='case_metadatas', to='capdb.VolumeMetadata'),
        ),
        migrations.AlterField(
            model_name='court',
            name='jurisdiction',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='courts', to='capdb.Jurisdiction'),
        ),
    ]
