from django.urls import path
from .views import front

urlpatterns = [
    path('', front, name='blog-home'),
    path('main/', front, name='blog-home'),
]
