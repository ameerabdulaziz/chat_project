from django.urls import path

from chat_app import views

urlpatterns = [
    path('', views.home_view, name='index'),
    path('chat/', views.chat_view, name='chat'),
]
