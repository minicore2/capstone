# Generated by Django 2.0.2 on 2018-05-10 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0037_auto_20180427_1535'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='casemetadata',
            name='capdb_casem_jurisdi_d41ebf_idx',
        ),
        migrations.AddField(
            model_name='casemetadata',
            name='jurisdiction_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='casemetadata',
            name='jurisdiction_name_long',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='casemetadata',
            name='jurisdiction_slug',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='casemetadata',
            name='jurisdiction_whitelisted',
            field=models.NullBooleanField(),
        ),
        migrations.AddIndex(
            model_name='casemetadata',
            index=models.Index(fields=['jurisdiction_slug', 'decision_date', 'id'], name='capdb_casem_jurisdi_429073_idx'),
        ),
    ]
