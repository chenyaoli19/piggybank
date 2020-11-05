from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('record/', views.RecordView.as_view()),
]
