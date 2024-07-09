from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import ChatReadRetrive


urlpatterns = [
    path('chat/', ChatReadRetrive.as_view()),
]