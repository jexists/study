from django.urls import path
from . import views #상대경로를 이용해서 import

urlpatterns = [
    path('', views.index),
    path('<int:post_id>', views.detail),
    path('<int:post_id>/comments', views.comment),
]