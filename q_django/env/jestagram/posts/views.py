from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
class Member:
  def __init__(self, name, age):
    self.name = name
    self.age = age
    
def index(request): #첫번째 파라미터: request
  context = {
    'post': {
      'author': 'jexists',
      'summary': 'django project'},
      #dictionary
      'numbers': [10,20, 30],
      #list
      'member': Member('jexists', 20)
      #class instance
  }
  return render(request, 'posts/index.html', context)
  # return render(request, 'posts/index.html', {context 작성 가능})
  # print('로그 남기기: 디버깅')
  # return HttpResponse('Hello World!')
  # http://localhost:8000/posts/ -> 실행


def detail(request, post_id):
  return HttpResponse(f'post: {post_id}!')

def comment(request, post_id):
  return HttpResponse('Hello comment!')