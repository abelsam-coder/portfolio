from django.urls import path
from .views import MessageApi, StartServer

urlpatterns = [
       path('message/',MessageApi.as_view()),
       path('start/', StartServer.as_view())
]