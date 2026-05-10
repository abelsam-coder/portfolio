from django.urls import path
from .views import MessageApi

urlpatterns = [
       path('message/',MessageApi.as_view())
]