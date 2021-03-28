from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
# Create your views here.
# class Member:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

def index(request): #첫번째 파라미터: request
  # context = {
  #   'post': {
  #     'author': 'jexists',
  #     'summary': 'django project'},
  #     #dictionary
  #     'numbers': [10,20, 30],
  #     #list
  #     'member': Member('jexists', 20)
  #     #class instance
  # }
  # context = {
  #   'posts': [
  #     {'author': 'joy', 'summary': 'book1'},
  #     {'author': 'sadness', 'summary': 'book2'},
  #     {'author': 'anger', 'summary': 'book3'}
  #   ]
  # }
  # posts = Post.objects.all().order_by('created_at')[0:1]
  # print(posts.query)
  # 오름차순 정렬
  # posts = Post.objects.all().order_by('-created_at')
  # 내림차순 정렬

  posts = Post.objects.all()
  # 포스트에 저장되있는 모든 데이터를 불러온다
  context = { 'posts': posts }
  return render(request, 'posts/index.html', context)
  # return render(request, 'posts/index.html', {context 작성 가능})
  # print('로그 남기기: 디버깅')
  # return HttpResponse('Hello World!')
  # http://localhost:8000/posts/ -> 실행


def detail(request, post_id):
  post = Post.objects.get(id=post_id)
  context = { 'post': post }
  return render(request, 'posts/detail.html', context)
  # return HttpResponse(f'post: {post_id}!')

# def comment(request, post_id):
#   return HttpResponse('Hello comment!')