# Generated by Django 2.0.8 on 2018-10-16 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0054_auto_20181016_1526'),
    ]

    operations = [
        # migrations.RunSQL(
        #     sql="""CREATE INDEX idx_casetext_text_gin ON capdb_casetext USING GIN (to_tsvector('english'::regconfig, COALESCE("capdb_casetext"."text", '')));""",
        #     reverse_sql='DROP INDEX idx_casetext_text_gin;',
        # ),
    ]
