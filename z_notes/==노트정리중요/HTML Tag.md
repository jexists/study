# HTML

- HyperText Markup Language

- 웹의 표준을 주관하는 W3C에서 발표한 프로그래밍 언어

- 확장명: .htm / .html

  [HTML태그확인사이트(인라인/블록): http://htmlreference.io](http://htmlreference.io)

기본규칙

> 시작태그와 종료태그 <> </>
>종료태그가 없는 태그: br, img, hr
> 종료태그 생략: dt, dd

#### Element  -인라인 요소 & 블록 요소&인라인블록 요소

**inline인라인** - 줄바꿈이 일어나지 않은 요소, 영역에 해당하는 글자만 색깔
-인라인요소 = 인라인요소만 포함 (블록요소X)
ex) a, span

**block 블록** - 줄바꿈이 일어나는 형태, 영역의 너비가 상위 영역의 전체 너비, 박스 색깔(행전체)
-블록요소 = 블록요소, 인라인요소 모두 포함
ex) div, p

**inline-block 인라인 블록**



**DOCTYPE: document type** 
**!** 첨부 안내문 
대문자나 소문자로 쓸수있음

```
<!DOCTYPE> / <!doctype>
```

**html**: 웹문서의 시작과 끝을 나타내는 태그
-lang 속성: 문서에서 사용할 언어
-문서정보를 지정하는 head부분과 실제 화면에 보이는 문서 내용 입력하는 body 부분

**head:**  웹브라우저가 웹 문서를 해석하기 위해 필요할 정보 입력하는 부분
-웹브라우저가 알아두어야 할 정보들 입력
-문서에서 사용할 외부 파일들 링크

> =title 태그: 웹브라우저 창/제목표시줄/문서 제목
> =meta 태그: 문자 인코딩 방법 (UTF-8 한글 )

body: 웹브라우저 화면에 나타날 태그

```html
<!DOCTYPE html> 
html 언어로 문서를 작성할거다. 
```

웹문서 기본 구조

```
<!DOCTYPE html>
<html lang="ko-KR">
	<head>
	...
	</head>
	<body>
	...
	</body>
</html>
```

#### Head Tag

웹브라우저 

```html
<head> 문서 자체에 대한 설명을 보여줌 </head>
<title> 부라우저의 제목 표시줄에 문서의 제목을 보여줌 </title>
<meta charset="UTF-8"> 문서의 작성자, 검색 키워드, 문서 파기 일자 등 문서에 대한 일반 정보
<style> 문서의 배경색상, 글자 줄간격 등 (CSS) </style>
<link> 다른 문서와의 관계를 나타내며, 외부 스타일 시트를 삽입할 때 사용
<base> html 문서 내에서 사용하는 상대경로가 실제로는 어떤 절대경로를 토대로 지정되는지를 나타냄
*UTF-8 html에 한글 폰트가 없어도 한글을 볼수있게 해주는 인코딩
```

**meta charset** 
-문자세팅 (싱글코드)
-meta = 정보처리 지침
UTF-8 = 세계 공용 유니코드 (외국에서 한국어 지원) 
EUC-KR = 한국어 (외국에서 한국어 적용)

```html
[한글깨짐]
<!doctype html> 
<html lang= “ko-KR”> 
  <head> 
    <meta charset="EUC-KR">
  </head>
  <body>
     <h1></h1>
     <p> </p>
  </body>
</html>                           
```

```html
[기본형식-한국어 지원]
<!doctype html> 
<html lang="ko-KR"> 
  <head> 
    <meta charset="UTF-8">
  </head>
  <body>
     <h1></h1>
     <p> </p>
  </body>
</html>
```

#### 텍스트 묶어주는 태그

hn태그 (n:1~6)

-각 웹 콘텐츠영역에서 제목을 표시할  때 사용

br 태그 
-줄을 바꿀 위치에 줄바꾸기

hr 
-주제가 바뀔 때 분위기 전환 
-수평줄 생김

p (paragrapy ?)
-일반 텍스트 단락
-입력한 내용 앞뒤로 빈 줄 생기면서 텍스트 단락이 만들어짐

blockquote 
-인용문 넣기 
-다른 텍스트보다 안으로 들어 써짐

pre
-입력한 그대로 표시
-소스에 표시한 공백이 그대로 표시 

#### 텍스트 표시

**strong** 중요한 내용이라서 강조할때
**b**  단순하게 굵게 표시

**em** 흐름상 특정 부분을 강조하고 싶을때
**i** 단순하게 이탤릭체로 표시

**q태그** 인용내용 표시
-줄바꿈 없이 다른 내용과 한줄에 인용 내용표시
-인용 내용 앞뒤에 따옴표 추가

**mark**
-태그로 묽은 부분의 배경색이 노랑으로 표시 (형광펜 효과)

**영역묶기**
span-줄 안에서 인라인 묶기
div 줄바뀜(블록) 단락으로 묽기

**ruby** 동아시아(베트남어/일본어 \<rt>) 글자에 주석 표시

#### 목록만드는 태그

**순서 없는 목록 (ul / li)**
-불릿 까만점

**순서 목록 (ol/li)**
-숫자
[속성] type(숫자: 알파벳 a A)
[속성] start 중간번호수정
[속성] reserved 역순

설명목록 (dl/dt/dd)
-제목과 그에 대한 설명

**표를 만드는 태그**

table 표 전체
tr 행
td 셀
th 제목셀

table>caption: 표 제목
-위쪽 중앙에 표시

figure > figcaption 표 제목
-위치에 따라 표의 위나 아래에 제목 표시

**행또는 열 합치기** 

td colspan=합칠 열의 개수
td rowspan=합칠 열의개수

표 구조 정의
표의 구조를 제목 부분과 실제 본문 그리고 요약 부분으로 나눔

thead-tbody-tfoot / thead-tfoot-tbody 순서

thead 제목

tbody 본문

tfoot 요약



colgroup>col 열끼리 묶어 스타일 지정

col 한 열에 있는 모든 셀에 같은 스타일 적용 / 싱글태그

colgroup 여러 열을 묶을 수 있음





#### CSS Style 태그

```css
<style type="text/css"> 스타일시트 정의
</style>
```

#### 문단 구성 태그

```html
<body> html 문서의 몸체 부분</body>
<br> 줄을 바꿀 때에 사용
<p> 문단을 바꾸기 위해 사용 </p>
<hr> 내용을 구분하기 위해 내용 사이에 선을 그어 표시할때 사용
```

#####   **h1~h6 = 가장 큰 제목 ~ 작은 제목까지**

```html
	<h1>문서에서 가장 중요한 제목: 딱 한번만 사용가능(회장)</h1>
	<h2>문서에서 두번째로 중요한 제목(이사/임직원)</h2>
	<h3>문서에서 세번째로 중요한 제목(사장)</h3>
	<h4>문서에서 네번째로 중요한 제목(부장)</h4>
	<h5>문서에서 다섯번째로 중요한 제목(차장)</h5>
	<h6>제목요소중에서 가장 낮은 레벨의 제목(과장)</h6>
크기로 기억하면 X 스타일로 크기 바꿀수있다!
중요한 의미를 두고 이해를 해야한다!
```

##### 웹페이지의 내용(텍스트, 이미지, 머리글 등) 구분 - 의미없다 / 빈 박스

​    div = division(분할, 나누기): 텍스트 사각형 박스로 지정 / 줄바꿈 / 영역을 의미 뜻은 없다 / 블럭요소
​	span = 영역지정 : 텍스트 문장단위로 지정 / 인라인요소

```html
<div>
   	div
</div>

<span>
	Span
</span>
```

##### **문단 내용 적을때** 

​    p = paragraph (하나의 문단) 단락/ 내용 / 설명, 의도, 정리 / 문단을 분리할때
​	pre = 실무사용X
​	address = 회사정보

​    br/ = line break (강제줄바꿈) *남용X
​	hr/ = 긴 선 나오게하는것 (---)

```html
<p>
    문단
</p>
</br>

```

##### **강조표현**

​    **strong = 글자 굵게 표시**
​	b = bold 글씨를 굵게
​	**em = emphasized text : 기울리기 텍스트 강조**
​	i = 기울리기
​	small = 글자를 조그맣게 표시

​    **ins = 내용의 추가**
​	**del = 내용을 삭제 ~~삭제**~~
​	u = 밑줄
​	s = 지우기 삭제선
​	strike = 지우기 삭제선

```html
<!--워드문서기준: 의미가 없다 (감정/이모티콘사용) 인라인 -->
			<p> 내용에 일부 영역을 잡아서 별도의 추가 표현을 해보려 합니다. <br />
					글씨를 <b>굵게</b>, <i>기울기</i>, <u>밑줄</u>, <s>취소선</s>을 처리 및 
					<span>일부만 별도의 색</span>을 처리 <br />
				하지만 이는 모두! 특별한 의미가 없으므로, 실제 사용에는 권장하지 않습니다. <br/>
				심지어, <s>s는 현재 완전히 삭제된 요소, 절대 사용하지 않는다.</s>
			</p>
			<hr />

<!-- 진짜 강조를 하고싶을때! 의미: 위험, 주의 (시멘틱 코드) 스타일 코드에서 바꿀수 있음 -->
			<p>
				내용에 단순하게 표현하는 것이 아닌, 더욱 디테일한 강조의 표현을 할 경우
				<strong> 위험, 경고, 확실한 강조의 표기</strong>, 
				<em> 알림의 표기, 인지하도록 표기, 한번더 상기 </em>
				<ins> 체크메세지표기, 기억하게 표기 </ins>
				<del> 처리후표기 </del>
				<mark> 내용을 주의력을 높이기 위해 표기 (형광펜표기) </mark>
				같은 내용을 작성하는 것은 따로 있다. <br />
				좀더 의미있는 코드로 다가가기 위한 형태로서 접근성표기로 따지면, 컴퓨터의 읽기의 형태조차 다르게 표현하고,
				그것에 따른 의미를 부여하도록 제작하는 시멘틱 코드로 제작하자 의도가 있으며, 
				span의 경우는 단순하게 시각형태만 처리하는 inline요소의 div 형식, 의미는 없다.
			</p>
```

##### **이미지&링크**

​     a = anchor (닻/정박지) =  해당위치로 이동하게 만드는 기능 / 독단으로 사용할수없다. / 반드시 블럭요소로 감싸줘야함!
​	herf = 경로이동
​    img = 이미지 삽입 

```html
<img src = "이미지" width="가로" height="높이" alt="이미지정보" title=말풍선/툴팁(tooltip):마우스포인트에 갖다대면 나오는 표시>
<a href="경로">이름</a>
<img scr="이미지" alt="이미지 정보">
```

##### 목록

   ol = ordered list 번호를 앞에 붙여 목록을 만드는 형식 / **순서**가 필요한 목록  /1. 2. 3. 4. (자식으로는 li이외는 아무것도 못들어간다.)
   ul = unordered list 글머리 기호를 앞에 붙여 목록을 만드는 형식 / 글머리 기호를 붙여 목록만드는 방식 / 순서가 필요없는 목록 / * * * (자식으로는 li이외는 아무것도 못들어간다.)

​	li = UI / OL 태그안에 들어가는 태크 실질적인 내용역할 

dl = definition list 정의목록 / 용어를 설명하는 목록 / 기호 없이 문단으로 목록을 만드는 형식 / ---:-------- (dt/dd외에는 아무것도 못들어간다. )

​    dt = definition term 정의 용어 / 용어 제목
​    dd = definition description 정의 설명 / 용어의 설명

```html
<ol>
    <li>1. 리스트</li>
    <li>2. 리스트</li>
</ol>

<ul>
    <li>*리스트</li>
    <li>*리스트</li>
</ul>

<dl>
    <dt>용어 제목</dt>
	<dd>용어 설명</dd>
</dl>
====================
<ol>
    <li>1. 리스트</li>
    <li>2. 리스트</li>
     <div> 이렇게 들어갈수없다. </div>
</ol>
=====================

<ol>
    <li>1. 리스트</li>
    <li>2. 리스트</li>
    <li>
        <div> 이렇게 해야한다.. </div>
                </li>
</ol>
```

##### 주석

```html
<!--숨기기-->
HTML 주석
<!-- ================주석 띄어쓰기================== -->
```

```css
/* 주석 */
CSS 주석
```

```javascript
//한줄주석
/* 자바스크립은 두가지 주석있음
여러줄 주석*/
```



https://htmlreference.io/ = 

웹개발쪽에는 .io가 많다

---

#### 웹 기초 이해하기 (index.html)

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, user-scalable=no, 
       initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 <meta charset="UTF-8">
	<!--[if lte IE 9]>
		<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
	<![endif]-->
 <link rel="shortcut icon" type="image/png" href="./favicon.png">
 <link rel="apple-touch-icon" href="favicon.png">
 <title>웹 기초 이해하기</title>
<!-- CSS=================== -->
 <style type="text/css">
  a {text-decoration: none;}
  body {margin: auto; width: 1100px; height: auto;}
  h1 {padding: 1rem; border-bottom: 1px; text-align: center; width: 100%; height: 100%;}
  .bodyBox {width: 100%; min-width: 700px; max-width: 1100px;}
  ol {margin: 0px; list-style: none;}
  ol:after{content:" "; display: block; clear: both;}
  ol > li {float: left; margin: 10px; 
			width: 300px; height: 100px;
			background-color: #fcc;
			text-align: center; line-height: 100px;
			border-width: 1px; border-style: solid; border-color: #777;		}
		li:nth-child(1):hover{background: #777;}
		ol > li >a{display: block; width: 100%; height: 100%; transition:all 300ms ease;}
		ol > li > a:focus{background-color: #71c; color:#fff;}
		ol > li > a:hover{background-color: #f60; color:#fff;}

		li>a {font-weight: bold;}

	@media screen and (max-width:700px) {
		body{width:auto; min-width:650px;}
	}
	@media screen and (max-width:450px) {
		body {width:auto; min-width:400px;}
		.bodyBox{min-width:auto;}
	}

	/*p{width: 100%; font-size: 1rem;}*/
	</style>
	</head>
	<body>
		<h1><a href="./index.html">웹 기초 이해하기</a></h1>
		<div class="bodyBox">
		<ol>
			<li><a href="./basic_setting.html"> 1. HTML 기본세팅</a></li>
			<li><a href="./basic_01.html">2. HTML 기초 1: 제목과 내용</a></li>
			<li><a href="./basic_02.html">3. HTML 기초 2: 내용요소과 강조</a></li>
			<li><a href="./basic_03.html">4. HTML 기초 3: 목록만들기 </a></li>
			<li><a href="./table_01.html">5. HTML, CSS: Table만들기-1</a></li>
			<li><a href="./table_02.html">6. HTML, CSS: Table만들기-2</a></li>
			<li> <a href="./form_01.html">7. HTML : Form 만들기-1</a></li>
			<li> <a href="./form_02.html">8. HTML : Form 만들기-2</a></li>
			<li> <a href="./form_03.html">9. HTML : Form 만들기-3</a></li>
			<li> <a href="./semantic_01.html">10. HTML : Semantic 구조-1</a></li>
			<li> <a href="./semantic_02.html">11. HTML : Semantic 구조-2</a></li>
			<li> <a href="./media.html">12. HTML : Media 파일 불러오기</a></li>
		</ol>
	</div>
	</body>
</html>
```

#### HTML 기초 1: 제목과 내용

```html
<!DOCTYPE html>
<!-- basic_01.html -->
<html lang="ko=KR">
	<head>
		<meta charset="UTF-8">
		<title>웹 기초 이해하기</title>
	</head>
	<body>
			<p> <a href="./index.html">웹 기초 이해하기</a></p>
			<p> <a href="./basic_01.html">HTML 기초 1: 제목과 내용 </a> </p>
			<p> <a href="./basic_02.html">HTML 기초 2: 내용요소과 강조 </a> </p>
			<p> <a href="./basic_03.html">HTML 기초 3: 목록 만들기 </a> </p>
		<div id="heading"> <!--div 사용해서 결과가 달라지지 않는다/ 영역을 나눈다.-->
			<!-- 제목(heading헤드라인) -->
			<h1>문서에서 가장 중요한 제목: 딱 한번만 사용가능(회장)</h1>
			<h2>문서에서 두번째로 중요한 제목(이사/임직원)</h2>
			<h3>문서에서 세번째로 중요한 제목(사장)</h3>
			<h4>문서에서 네번째로 중요한 제목(부장)</h4>
			<h5>문서에서 다섯번째로 중요한 제목(차장)</h5>
			<h6>제목요소중에서 가장 낮은 레벨의 제목(과장)</h6>
		</div>

		<hr/> <!--horizontal(수평선) 상위내용과 하위내용을 구분한다.(마크다운---) -->
		<div id="content">
			<p> paragraph: 내용을 의미하며, 하나의 단락을 형성하는데 사용하는 기능 </p>
			<p> 중간에 띄어쓰기를 하고 싶어서 &nbsp;         이렇게 처리해보고, 
				줄바꿈도 하고 <br> 싶어서,
				---------------
			이렇게 만들어보아요! </p> <!-- 공백은 스페이스 한번으로 인지한다.  -->
			<!-- &nbsp; => 특수문자 스페이스 강제로 (10년전에 사용)
			css로 다르게 컨트롤해야한다. -->
			<!-- br => 남용금지! -->
			<pre> 중간에 띄어쓰기를 하고 싶어서         이렇게 처리해보고, 
				줄바꿈도 하고 싶어서,

				이렇게 만들어보아요! </pre> <!--단점: 가독성X, 탭 사용X, 디자인X -->
			<pre>작성한 내용을 그대로 표현하는 요소,
실무에서는 사용할 수 가없다 탭사용불가/이쁘게 . </pre>
		</div>
		<p> 웹을 구성하는 기본 언어는 
			<abbr title="hiper text markup language">HTML </abbr>,과
			<!-- abbrr: 두문자어(줄임말)를 사용하는 요소/추가적인 내용을 설명해야할때 -->
			<abbr title="casecading style sheet">CSS </abbr>,
			java script가 있으며, 해당내용은 
			<abbr title="그린컴퓨터아카테미"> 그린컴 </abbr>에서
			<cite title="www.xidoweb.com">시도웹 </cite> 강사가 알려드리고 있습니다.
		</p>		

		<cite title="추가적인 설명을 나타나게하는것">Title </cite> 
		<!-- cite: 부가적인 설명을 첨부하는 기능, 요약, 설명, 상세설명, 참고주소 -->

		<br />
			<!-- FOOTER에 무조건 사용 -->
		<address> 주소: 웹페이지의 주소, 연락처, 사업자번호 등 정보를 작성하는 공간 </address>

		<address> 
			<P>주소 </P>
			<P>웹페이지의 주소 </P>
			<P>연락처 </P> 
			<P>사업자번호 </P>
		</address> <!-- 여러 주소가 많을때 P 태그가 가능하다. -->


		<blockquote>인용문 작성하는 공간(마크다운>)</blockquote>
			<!--인용문: 남의 글이나 말에서 따 온 문장 "" -->
		<blockquote>
			<q>인용문1 작성하는 공간</q>
			<q>인용문2 작성하는 공간</q>
			<q>인용문3 작성하는 공간</q>
		</blockquote>
		
		<!-- ===================================== -->
		<!--
			- block: 하나의 형태를 가질 수 있고, 줄바꿈을 처리할 수 있다, 사이즈를 가질 수 있는 요소 (고체)
			- inline: 형태(사이즈)를 가질수 없다, 옆으로 나열되어 처리된다. 감싸야하는 요소가 필요하다. (액체, 인라인스케이트)

			* inline 요소는 block 요소를 이용하여 감싸주어야 한다.
			* inline 요소 내부에는 block 요소를 감쌀 수 없다. (일부 예외)
			예외의 대표: a 요소 

			* block 요소라고 하더라도, 무조건 block을 감쌀수 있는 것은 아님
			규칙과 의미에 맞게 사용하여야 한다. (예: div) 

			[SUBLIME 키]
			필요한 만큰 선택후 shift ctrl [ ] 하면 축약
		-->

	</body>
</html>

```

#### HTML 기초 2: 내용요소과 강조

```html
<!DOCTYPE html>
	<html lnag=ko-KR>
		<head>
			<meta charset="UTF-8">
			<title> 웹페이지 기초 이해하기 </title>
			<style type="text/css">
				span{background-color:#fa0;}
				/*
				strong{font-weight:normal; color:#acf;}
			  em{font-style:normal; font-size:1.3rem;}
			  ins{text-decoration:none;}
			  ins:hover{color:#afc;}
			  del{text-decoration:none; font-size:0.5rem;} 
			  */
			  img.basic {width: 400px; height: 500px;}  
			  /*하나의 파일일때는 스페이스를 안해도된다.
					id 일때 # (img) 생략가능
					class 일때 .
				 */
			</style>
		</head>
		<body>
			<p> <a href="./index.html">웹 기초 이해하기</a></p>
			<p> <a href="./basic_01.html">HTML 기초 1: 제목과 내용 </a> </p>
			<p> <a href="./basic_02.html">HTML 기초 2: 내용요소과 강조 </a> </p>
			<p> <a href="./basic_03.html">HTML 기초 3: 목록 만들기 </a> </p>

			<h1> 웹페이지 기초 이해하기 </h1>
			<h2> 내용 및 강조의 표현 </h2>
			
			<!--워드문서기준: 의미가 없다 (감정/이모티콘사용) 인라인 -->
			<p> 내용에 일부 영역을 잡아서 별도의 추가 표현을 해보려 합니다. <br />
					글씨를 <b>굵게</b>, <i>기울기</i>, <u>밑줄</u>, <s>취소선</s>을 처리 및 
					<span>일부만 별도의 색</span>을 처리 <br />
				하지만 이는 모두! 특별한 의미가 없으므로, 실제 사용에는 권장하지 않습니다. <br/>
				심지어, <s>s는 현재 완전히 삭제된 요소, 절대 사용하지 않는다.</s>
			</p>
			<hr />

			<!-- 진짜 강조를 하고싶을때! 의미: 위험, 주의 (시멘틱 코드)
				스타일 코드에서 바꿀수 있음 
				strong{font-weight:normal;}
			  em{font-style:normal;}
			  ins{text-decoration:none;}
			  del{text-decoration:none;}

			  [업그레이드]
				strong{font-weight:normal; color:#acf;}
			  em{font-style:normal; font-size:1.3rem;}
			  ins{text-decoration:none;}
			  ins:hover{color:#afc;} - /*처리후표기:마우스되면 색깔바뀜*/
			  del{text-decoration:none; font-size:0.5rem;} 
			   -->
			<p>
				내용에 단순하게 표현하는 것이 아닌, 더욱 디테일한 강조의 표현을 할 경우
				<strong> 위험, 경고, 확실한 강조의 표기</strong>,  
				<em> 알림의 표기, 인지하도록 표기, 한번더 상기 </em>
				<ins> 체크메세지표기, 기억하게 표기 </ins>
				<del> 처리후표기 </del>
				<mark> 내용을 주의력을 높이기 위해 표기 (형광펜표기) </mark>
				같은 내용을 작성하는 것은 따로 있다. <br />
				좀더 의미있는 코드로 다가가기 위한 형태로서 접근성표기로 따지면, 컴퓨터의 읽기의 형태조차 다르게 표현하고,
				그것에 따른 의미를 부여하도록 제작하는 시멘틱 코드로 제작하자 의도가 있으며, 
				span의 경우는 단순하게 시각형태만 처리하는 inline요소의 div 형식, 의미는 없다.
			</p>
			<hr />

			<h2> 링크, 이미지 </h2>
			<p> <a href="./index.html"> index로 이동 </a> </p>
			<!-- 스크롤했을때 어느 부분으로 이동하기 
			  (id(#)는 가능 / class(.)는 불가=정확히 인지X (확장자로 인식))
				div 영역 이름 달기: <div id = "heading"> 
				a = 닻 문서, 지정된 위치도 가능-->
			<p> <a href="./basic_01.html#content">basic_01 내용부분으로 이동</a></p>

			<!-- img = 싱글코드 /인라인 요소 / 크기를 가질수있는 인라인요소 / 인라인블락
				영역 만들어야함!
			  마크다운: ![이미지설명] (주소)
			  크기: pixel 안써도 자동인식
			  같은 폴더에 폴더 만듬 이름: img /images -->
			<img src="주소" alt="이미지를 설명" />
			<img src="주소" alt="정확한 이미지의 의도에 맞는 설명" />
			<div>
				<!-- 옛날에 사용했음 ! -->
				<img  src="./img/html_basic_code.png" alt="html_basic_code" 
						 width="400px" height="500px"
				/> 
					<!-- 무조건 CSS에 head/style에 넣어야한다 
						img{width: 400px; height: 500px;} -->
				<img class="basic" src="./img/html_basic_code.png" alt="html_basic_code" />
			</div>
		</body>
	</html>
```

#### HTML 기초 3: 목록만들기

```html
<!DOCTYPE html>
<html lang="ko-KR">
	<head>
		<meta charset="UTF-8">
		<title> 웹기초이해하기</title>
	</head>
	<body>
			<p> <a href="./index.html">웹 기초 이해하기</a></p>
			<p> <a href="./basic_01.html">HTML 기초 1: 제목과 내용 </a> </p>
			<p> <a href="./basic_02.html">HTML 기초 2: 내용요소과 강조 </a> </p>
			<p> <a href="./basic_03.html">HTML 기초 3: 목록 만들기 </a> </p>
		<h1>HTML 기초 1: 제목과 내용</h1>
		<h2>HTML 기초 2: 내용요소과 강조</h2>

		<div>
			<h3> 기본형 목록 만들기 </h3>

			<h4> 순서가 있는 목록리스트 만들기</h4>
			<ol>
				<li> 조리법 설명하는 내용 </li>
				<li> 조리법 설명하는 내용 </li>
				<li> 조리법 설명하는 내용 </li>
				<li> 조리법 설명하는 내용 </li>
				<li> 조리법 설명하는 내용 </li>
				<li> 조리법 설명하는 내용 </li>
			</ol>

			<hr />

			<h4> 순서가 없는 목록 리스트 만들기 </h4>
			<ul>
				<li>순서가 없는 목록리스트1  </li>
				<li>순서가 없는 목록리스트2  </li>
				<li>순서가 없는 목록리스트3  </li>
				<li>순서가 없는 목록리스트4  </li>
				<li>순서가 없는 목록리스트5  </li>
			</ul>

			<hr />

			<h4> 내용정의 목록리스트 만들기
			<dl>
				<dt>용어1</dt>
				<dd>정의1</dd>
				<dd>정의2</dd>

				<dt>용어2</dt>
				<dd>정의1</dd>
				<dd>정의2</dd>
			</dl>

		</div>	
		<div>
			<h3>복합형 리스트</h3>

			<h4>다단리스트</h4>
			<ul>
				<li>목록리스트</li>
				<li>목록리스트</li>
				<li>
					<ol>
						<li>하위 목록 리스트</li>
						<li>하위 목록 리스트</li>
						<li>하위 목록 리스트</li>
						<li>하위 목록 리스트
							<ul>
								<li>3단리스트</li>
								<li>3단리스트</li>
								<li>3단리스트</li>
							</ul>
						</li>
					</ol>
				</li>
			</ul>
		</div>

	</body>
</html>
```



------

 **표/테이블(table)**

-주식, 경기표, 게시판 등 사용

```html
-<table> </table>
-<caption> 테이블제목 </caption> 박스 위에 제목 나옴
-<table summary="caption에서 설명안하는 자세한 내용 적기"> </table>
-<tr>가로박스(행)</tr> 박스안에 한줄 길게 
-<th>중요한 제목</th> (css에서 th기능이 안먹는다.)
-<td>cell 내용</td> tr 태그 안에 포함 (박스 길게 한줄안에 조그만한 박스생김)
tr안에 th랑 td가 있어야한다. 

<단어>
span: 공백/폭/공간/
row: 가로
col:세로
<html> 합칠때
colspan: 공간을 처리하는 (가로) 가로를 합칠때 (세로의 선을 없애서 합친다.)
rowspan: 공간을 처리하는 (세로) 세로를 합칠때 (가로의 선을 없애서 합친다.)
<td colspan="가로로 합치는 숫자">내용</td> => 옆에있는 td삭제해야함
<td rowspan="세로로 합치는 숫자>">내용</td> => 밑에 tr에 있는 같은 위치 td삭제!

thead
tbody
tfoot
    
<caption>테이블 제목</caption> 
      <tr>
        <th>내용</th>
        <th>내용</th>
      </tr>
      <tr>
        <td>내용</td>
        <td>내용</td>
      </tr>
```



border

-테이블의 테두리(boarder)을 설정할 수 있다. (속성 명시X = 빈 테두리)

border-width

\-

border-style

\-

border-color

\-

border-collapse

-해당 테이블의 테두리 한줄 로 표현 (속성 명시X = 테이블 요소별 모두 표현)

border-spacing

-테이블 요소(th, td)간의 여백을 설정

css: border-width, border-style, border-color, border-collapse, border-spaicing



entity code - 특수기호

```=
&copy; ©
&lt; <
&gt; >
&amp; &
&middot; ·
&#8361; ₩
```



웹접근성 4가지 지침

---

## 명도대비

4.5:1 컬러비율로 제작

4.5:1을 만들수 없다면 3:1도 가능

단 14pt bold 또는 18pt 이상의 글씨 크기를 사용해야 가능

가독성이 떨어지는 글씨는 삭제하여도 무방 (5pt이하)

최소 12pt이상 사용

전경색(글씨색)과 배경색(글씨의 뒤에 오는 이미지)을 기준으로 비교

colour contrast analyser - https://developer.paciellogroup.com/resources/contrastanalyser/

mac: [CCA-1.1.2.dmg](https://github.com/ThePacielloGroup/CCAe/releases/download/v1.1.2/CCA-1.1.2.dmg)

window: [CCA-Setup-1.1.2.msi](https://github.com/ThePacielloGroup/CCAe/releases/download/v1.1.2/CCA-Setup-1.1.2.msi) /exe



white: fff

gray: 888888, 777777, adadad, 555555

yellow: fff30d, baa50c

---

명도대비

#fff: #888 => 3.54:1

#fff:777 =>4.478:1



페이스북 가이드라인

https://ko-kr.facebookbrand.com/#brand-guidelines-assets

유투브 가이드라인

https://www.youtube.com/intl/ko/yt/about/brand-resources/#logos-icons-colors

인스타 가이드라인

https://en.instagram-brand.com/



---

1. 레이어 정리
2. 서체
3. 색체 (명도대비)
4. 로고/아이콘 규정된 가이드라인 확인@



---

CSS = 자바스크립 제어

HTML & CSS 분리!!



Sublime = shift + ctrl + d 한줄 복사

글자 선택후 ctrl + d 방향키 하고 같은 글자만 바꿀수 있음

increment selection  = ctrl +alt i 

typora = 백팁으로 `` 있는 그대로 사용하는것

F11 = 전체화면 (인터넷)

디발자

개자이너

HTML

SUBLIME



**IP / emmet**

**emmet css**

​     

html:4t +tab html 4.01에 양식 

html:5 + tab하면 html 5.0

html lang => ko-KR

! +tab 하면 나옴

<!-- --> 주소 ctrl + /

meta:compat      => IE=edge로 변경

  cc:ie6    => ie 9

  link:touch => .png 변경

  link:favicon

emmet.io 이러한 단축키 설명

https://www.w3.org/TR/2017/REC-html52-20171214/



HTML 5.2버전



https://webportfolio.github.io/ 포트폴리오





**옛날버젼**

```html
<!DOCTYPE html>
<!--basic_setting.html-->
<html lang="ko-KR">
 <head>
   <meta http-equiv="X-UA-Compatible" content="IE=7">
   <meta charset="UTF-8">

   <link rel="shortcut icon" type="image/x-icon" href="favicom.ico">
   <link rel="apple-touch-icon"href="favicon.png">
     <!-- 삽입콘을 등록해서 쓸수있는 것 (favicon:사이트 상단 아이콘) -->
   <title>Document</title>
   <!-- CSS ===================================== -->
   <style type="text/css">
     
   </style>
 </head>
 <body>
   <!-- layout ================================== -->

   <!-- style =================================== -->
   <script type="text/javascript">
     
   </script>
 </body>
</html>
```

**지금버젼**

```html
<!DOCTYPE html>
<!--basic_setting.html-->
<html lang="ko-KR">
 <head>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta charset="UTF-8">

   <link rel="shortcut icon" type="image/png" href="./favicom.png">
   <link rel="apple-touch-icon"href="./favicon.png">
   <title>Document</title>
   <!-- CSS ===================================== -->
   <style type="text/css">
     
   </style>
 </head>
 <body>
   <!-- layout ================================== -->

   <!-- style =================================== -->
   <script type="text/javascript">
     
   </script>
 </body>
</html>
```

#파비콘 코드 검색! - 크기마다 다 저장달라서.

IE 핵 정리 보면됨~ (ex: div {width:100px; _width:100px; *width:100px; width:_100px;})

html5shiv github- 

https://github.com/aFarkas/html5shiv/releases/tag/3.7.3

```html
익스플로어를 위해서 불러오는것 : https://github.com/aFarkas/html5shiv/releases/tag/3.7.3 (다운)
<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
자바스크립 파일(js)은 <script> </script>로 불러와야한다.
조건부 주석 -> 만약에 IE6버전보다 작거나 같은 버전이라면 아래와 같은 기능으로 수용하세요
lte = less than equal (<=)
gte = greater than equal (>=)
e =, lt <, gt >
      <!--[if lte IE 6]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
      <![endif]-->
```

싱글코드 <img.../>
... ->   id = “” / class = “”

id = <고유의 이름> 주민등록증(ID카드) 다른아이디랑 공유X / 딱 한번밖에 못쓴다.
class = <공통의 이름> 지칭(모임) 여러사람이 될수있음 / 나도 여러개 가질수있음

한사람이 여러 클라스를 가질수있다

더블코드 <div></div>

&nbsp; -> 공백 스페이스





semantic 구조: 의미가 있는 구조
article :여러개의 내용으로 나누는 구분을 의미한다. 본문 내의 세부 절 등에 사용 된다. 
aside: 주요 내용 이외의 문서 내용을 의미한다. 블로그의 사이드 바 등에 사용된다. 
footer :문서의 푸처를 의미한다. 저작자나 저작권 정보 등에 사용된다. 
header:문서의 헤더를 의미한다. 사이트소개나 로고 등에 사용된다.
nav :내비게이션을 의미한다. 웹 문서 내의 메뉴 등에 사용된다. 
section :문서의 내용을 의미한다. 웹 문서의 본문 등에 사용된다. 

엘리먼트: html 문서의 개별적인 구성 요소를 의미
시맨틱 태그: 태그 이름만 보고도 역할을 짐작할 수 있는 태그
마크업 태그등을 이용하여 데이터의 구조를 명가하는 언어의 한가지
CSS 웹문서의 전반적인 스타일을 미리 저장해 둔 스타일 시트