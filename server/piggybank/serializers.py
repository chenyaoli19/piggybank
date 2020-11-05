from rest_framework import serializers
from .models import Record


class RecordSerializer(serializers.ModelSerializer):
    total = serializers.IntegerField()
    class Meta:
        model = Record
        fields = ['id', 'date', 'amount', 'total', 'notes']
