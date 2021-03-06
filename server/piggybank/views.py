from django.db.models import F, Sum, Window
from django.http import HttpResponse
from django.utils import timezone

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Record
from .serializers import RecordSerializer, RecordWithTotalSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the piggybank index")


class RecordView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        '''
        This api handles creating a new record or updating an existing record
        :param request:
        :return:
        '''
        amount = request.data.get("amount")
        print(amount)
        if not amount:
            return Response({'error': 'amount cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)
        amount = int(amount)
        now = timezone.now()

        latest_record = Record.objects.order_by('-date').first()
        if latest_record and now.date() == latest_record.date.date():
            latest_record.amount = amount
            latest_record.date = now
            latest_record.save()
        else:
            record = Record(date=now, amount=amount)
            record.save()

        records = Record.objects.annotate(total=Window(Sum('amount'), order_by=F('date').asc())) \
            .values('id', 'date', 'amount', 'total').order_by('-date')

        serializer = RecordWithTotalSerializer(records, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request):
        '''
        This api handles getting a list (paginated) records
        :param request:
        :return:
        '''
        # records = Record.objects.order_by('-date').all()
        records = Record.objects.annotate(total=Window(Sum('amount'), order_by=F('date').asc()))\
            .values('id', 'date', 'amount', 'total').order_by('-date')

        serializer = RecordWithTotalSerializer(records, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
