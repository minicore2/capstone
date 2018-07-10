# Generated by Django 2.0.2 on 2018-07-10 18:48
import email_normalize
from django.db import migrations

def add_normalized_email(apps, schema_editor):
    CapUser = apps.get_model("capapi", "CapUser")
    for user in CapUser.objects.all():
        user.normalized_email = email_normalize.normalize(user.email, False)
        user.save()


class Migration(migrations.Migration):

    dependencies = [
        ('capapi', '0004_capuser_normalized_email'),
    ]

    operations = [
        migrations.RunPython(add_normalized_email, migrations.RunPython.noop)
    ]
