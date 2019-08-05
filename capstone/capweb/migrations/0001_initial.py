# Generated by Django 2.2.3 on 2019-07-11 18:17

from django.db import migrations, models
import django.db.models.deletion
from db_file_storage.storage import DatabaseFileStorage

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CMSPicture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bytes', models.TextField()),
                ('filename', models.CharField(max_length=255)),
                ('mimetype', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='GallerySection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('order', models.IntegerField(default=10)),
            ],
        ),

        migrations.CreateModel(
            name='GalleryEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='entries', to='capweb.GallerySection')),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('page_link', models.CharField(blank=True, max_length=255, null=True)),
                ('repo_link', models.CharField(blank=True, max_length=255, null=True)),
                ('order', models.IntegerField(default=10)),
                ('image', models.ImageField(blank=True, null=True, storage=DatabaseFileStorage(), upload_to='capweb.CMSPicture/bytes/filename/mimetype')),
            ],
        ),
    ]
