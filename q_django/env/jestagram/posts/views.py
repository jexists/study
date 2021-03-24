from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request): #첫번째 파라미터: request
  print('로그 남기기: 디버깅')
  return HttpResponse('Hello World!')
# http://localhost:8000/posts/ -> 실행


def test(request):
  return HttpResponse('Hello Test!')
# http://localhost:8000/test/ -> 실행

def home(request):
  return HttpResponse('Hello Home!')
# http://localhost:8000/ -> 실행