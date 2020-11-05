from django.db import models


class Record(models.Model):
    date = models.DateTimeField('date of the record')
    amount = models.IntegerField(default=0)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return "{}:{}".format(self.date.isocalendar(), str(self.amount))
