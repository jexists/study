from django.urls import path
from . import views #상대경로를 이용해서 import

app_name = 'posts'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:post_id>', views.detail, name='detail'),
    # path('<int:post_id>/comments', views.comment),
]