from django.urls import path
from . import views
urlpatterns = [
       path('auth/login/',views.Login.as_view())
]