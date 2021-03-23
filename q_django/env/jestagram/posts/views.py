from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
  return HttpResponse('Hello World!')
# http://localhost:8000/posts/ -> 실행