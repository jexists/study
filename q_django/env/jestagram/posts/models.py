from django.db import models

# Create your models here.

class Post(models.Model):
  # 변수 = 변수타입 (Model Field Reference)
  author = models.CharField(max_length=100)
  #최대 100글자 
  body = models.TextField()
  #대용량 텍스트
  create_at = models.DateTimeField()
  #날짜와 시간 저장

  def __str__(self):
    return f'{self.author}: {self.body}'
  #확인하기