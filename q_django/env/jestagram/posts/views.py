from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Post
from django.utils import timezone
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

def new(request):
  return render(request, 'posts/new.html')


def create(request):
  #GET 방식일 경우
  # print(request.GET)
  # request.GET['author']
  # request.GET['body']
  #아래코드가 더 안전
  # print(request.GET.get('author'))
  # print(request.GET.get('body'))
  # request.GET.get('author')
  # request.GET.get('body')
  # print(reqest.GET)
  # context = {'author': request.GET.get('author'), 'body': request.GET.get('body')}
  # return render(request, 'posts/create.html', context)

  author = request.POST.get('author')
  body = request.POST.get('body')

  post = Post(author=author, body=body, created_at=timezone.now())
  post.save()

  return redirect('posts:detail', post_id=post.id)
  # 새로운 상세페이지로 이동




# def comment(request, post_id):
#   return HttpResponse('Hello comment!')