### **웹표준(Web Standard)**: 

-웹의 측면을 서술하고, 정의하는 공식 표준
-사용성과 접근성에 직접 영향을 미치는 더 높은 수준의 표준에 초점을 둔다.

과거: 틀 형식 (엑셀: 테이블코드- 흐름파악힘듬, 복잡)
현재: 

**웹표준의 장점:** 
-마크업 용량이 줄어들었다. (코드량 줄어든다/비용절감)
-컨텐트와 문서 모양을 분리할 수있다. (쉽게 수정가능)
-향후 호환성을 보장 받는다.
-웹접근성이 높아진다. (cross-browsing/많은 브라우저와 장치에서 읽을수있다.)

**웹접근성이란?**
-**버너스리 (Tim Berners-Lee)**: 월드 와이드 웹(World Wide Web)을 창시

> "웹이란 장애에 구애없이 **모든 사람**들이 손쉽게 정보를 공유할 수 있는 공간"
> -> "모든 사람이 정보통신 기기나 서비스를 손쉽게 활용할 수 있도록 만드는 것"



**html & css 개발언어X, 표현언어**



---

### HTML: 하이퍼 텍스트 문서를 만들기 위한 언어

**HTML5** = 2014년 10월 재정된 차세대 웹표준 (현재 계속 개발 진행중)

```html
<html>
    <head>
        <title> 이름 </title>
    </head>
    <body>
        
    </body>
</html>
```

head: title 이름, 정보, 스타일, 
body: 다양한 구조, 내용

**HTML** = html + css + javascript (다양한 언어를 함께 사용 가능) 

#### HTML 버전

HTML 2.0 = 최초의 버전
HTML 2.X
HTML 3.2
HTML 4.0/4.01 = strict, **transitional**, frameset (배포)
XHTML 1.0 = 정교하고 까다롭다. ([브라우져 2개] 넥스케이프:유료, 익스플로어:무료)
~~XHTML 2.0 = 익스플로어에 맞춰서 만들어졌음 (해지)~~
HTML 5 = 현재

**DTD 선언** <!DOCTYPE html>
-문서 작성시작시 필요한 형식표현

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        
    </body>
</html>
```

**character Set : 문자집합 & 인코딩**
-정보를 표현하기 위한 글자나 기호들의 집합을 정의한 것
-문자 인코딩 (부호화)
-디코딩 (복호화)

**EUC** 
-Extend Unix Code
-유닉스에서 영어를 제외한 문자를 표시하기 위한 확장부호

**CP949** (파이썬)
-마이크로소프트에서 사용하는 한글 문자의 부호표

**유니코드(Unicode) 프로젝트**
-전세계의 모든 문자를 동일하게 표현하기 위한 산업표준

**UTF(Unicode Transformation Format)**
-유니코드 형태의 문자를 변환하기 위한 공식이다.

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```



## HTML 기초요령

```html
<시작> 
    내용작성 <혼자 />
</시작>
```

```html
처음과 끝: 시작과 끝에 /존재, 같은 이름
<p>
    내용작성
</p>
<span>
</span>
```

```html
혼자: 자체적으로 마지막에 /
<br/> 
<hr/> ---
<imag src = "image/image.jpg" alt="이미지"/>

형식구조: <    ="    ">
```

**올바른 규칙:**
-종료태그가 반드시 있어야한다.
-요소/속성은 소문자로 표기한다. P = X
-태그 중첩을 허용하지 않는다.
-속성 값들은 따옴표를 사용한다. "중요"
-싱글태그에도 종료표기를 한다.

### CSS: 꾸며주는 기능

```css
<style type="text/css"> </style>
```

```html
<div id="box">
</div>
<div class="box">
</div>
```

```css
#box{}
.box{}
```

css # = html id
css . = html class

```css
#box{bacground-color:#00f;}
#box{배경화면:파랑;}
```

답이 끝났다면 ;



---



모든 브라우져에 문제없이 돌아가게 해라 = **CROSS-BROWSING**

##### Web Developer 확장프로그램 다운!

**크롬** - 메뉴 - 도구더보기 - 확장프로그램 - 왼쪽 하단 - 크롬 웹스토어

**파이어폭스** - 부가기능관리자 - web developer 검색 - 설치

---

메모장: 기본, 무료, 기능적음
brackets.io: 웹디자인 기능사 프로그램, 무료 
Sublimetext: 유료, 한글지원X, Mac 호환 굿 (https://www.sublimetext.com/)
VSCODE: 무료
atom.io: 무료, 무거움, 실행 오래걸림

---

##### **Sublimetext추가 기능 설치:** 

IMEsupport, ConvertToUTF-8, Theme(soda,solaraize), Alignment, Increment Selection, SideBarEnhancements, MarkdownExtended, MarkdownEditing, MarkdownPreview

**앱스토어 설치**: tool - command palette(MAC: 맨앞 SublimeText) - IP(install Package Control) - 설치완료
웹: packagecontrol.io (앱스토어 목록)
tools - command palette - ip (package control: install packages 클릭 - 웹스토어 
**IMEsupport** -  한글지원 / 글자가 한박자씩 늦어지는것 (안ㄴ) "MAC은 필요없음"
**SideBarEnhancements** - 왼쪽 오른버튼 - 사이드바 여러기능 추가
**ConvertToUTF8** - 
**Markdown preview** - 
**Theme - SoDa** - 테마 변경 preferences - theme - 검색
menu - view - **side bar** (file - open folder - 폴더 위치 찾기)
컴퓨터C - Program File - SublimeText3 - subl.exe (환경변수 편집)  깃베쉬: $ subl .

**저장하기**: 파일 - save as - name.md (md파일로 저장가능)
**지우기**: setting을 지워야함 (위치: C - 사용자 - 사용자이름 - AppData: 숨김항목보기 - Roaming - Sublime Text 3 - 제어판지우기)

Package Control: Install Package => 앱 설치
Package Control: List Package => 목록/깔았던 앱 리스트 보기
Package Control: Disable Package => 앱 정지/강제로 앱을 멈추게 하고싶을때
Package Control: Enable Package => 다시시작/다시 동작하게 하고싶을때
Package Control: Remove Package => 앱 삭제/지울때

---

웹페이지의 내용(텍스트, 이미지, 머리글 등) 구분

​    div = division(분할, 나누기): 텍스트 사각형 박스로 지정 / 줄바꿈 / 영역을 의미 뜻은 없다
​	span = 영역지정 : 텍스트 문장단위로 지정 / 

```html
<div>
   	div
</div>

<span>
	Span
</span>
```

​    p = paragraph (하나의 문단) 단락 / 설명, 의도, 정리 / 문단을 분리할때
​    br = line break (강제줄바꿈) *남용X

```html
<p>
    문단
</p>
</br>

```

​    strong = 글자 굵게 표시
​	b = bold 글씨를 굵게
​	em = emphasized text : 기울리기 텍스트 강조
​	i = 기울리기
​	small = 글자를 조그맣게 표시

​    ins = 내용의 추가
​	del = 내용을 삭제 ~~삭제~~
​    ul = unordered list 글머리 기호를 앞에 붙여 목록을 만드는 형식 / 글머리 기호를 붙여 목록만드는 방식 / 순서가 필요없는 목록
​    ol = ordered list 번호를 앞에 붙여 목록을 만드는 형식 / 순서가 필요한 목록
​    dl = definition list 정의목록 / 용어를 설명하는 목록 / 기호 없이 문단으로 목록을 만드는 형식
​	li = UI / OL 태그안에 들어가는 태크 실질적인 내용역할
​    dt = definition term 정의 용어 / 용어 제목
​    dd = definition description 정의 설명 / 용어의 설명

​    a = anchor (닻/정박지) =  해당위치로 이동하게 만드는 기능 / 독단으로 사용할수없다. / 반드시 블럭요소로 감싸줘야함!
​	herf = h
​    img = 이미지 삽입 

```html
<img src = "이미지" width="가로" height="높이" alt="이미지정보" title=말풍선/툴팁(tooltip):마우스포인트에 갖다대면 나오는 표시>
```

​    h1~h6 = 가장 큰 제목 ~ 작은 제목까지

주석

```html
<!--숨기기-->
HTML 주석
<!-- ================주석 띄어쓰기================== -->
```

```css
/* 주석 */
CSS 주석
```



```html
<!doctype html>
<html>
  <head>
   <meta charset="UTF-8">
   <title>메인페이지</title>
   <style type="text/css">
   		h1{color:#fa0;}
   		p.first{font-size:1.5rem;}
   		/* 주석 */
	 </style>
  </head>
  <body>
    <h1>최초의 인식하는 페이지</h1>
    <p class="first">여기는 index.html문서입니다.</p>
    <p><a href="./test_01.html"> 여기를 클릭하여 test_01.html로 이동하게 해주세요</p>
    <p>
    	<a href="https://naver.com">  네이버로 가기</a>
    </p>
    <p>
    	<a href="https://daum.net"> 다음으로 가기</a>
    </p>
    <p>
    	<a href="https://google.com"> 구글로 가기</a>
    </p>
    <p>
    	<a href="https://fonts.google.com"> 폰트구글로 가기</a>
    </p>
    <p>
    	<a href="http://xidoweb.com"> 시도웹으로 가기</a>
    </p>

  </body>
</html>
```



