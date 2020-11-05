# Generated by Django 3.1.3 on 2020-11-05 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(verbose_name='date of the record')),
                ('amount', models.IntegerField(default=0)),
                ('notes', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
