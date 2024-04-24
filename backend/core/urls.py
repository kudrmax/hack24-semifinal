from django.urls import path
from .views import front
from django.urls import re_path

urlpatterns = [
    re_path(r".*", front, name='front')
]
