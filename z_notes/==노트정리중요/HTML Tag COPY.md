# 웹 기초 이해하기

#### 1. HTML 기본 세팅

```html

```

#### 2. HTML 기초 1: 제목과 내용

```html
<!DOCTYPE html>
<!-- basic_01.html -->
<html lang="ko=KR">
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<!--[if lte IE 9]>
		<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
	<![endif]-->
	<link rel="shortcut icon" type="image/png" href="./favicon.png">
	<link rel="apple-touch-icon" href="favicon.png">
		<title>웹 기초 이해하기</title>
	<style type="text/css">
		a{text-decoration: none;}
		.main>a {font-size:30pt;}
	</style>
	</head>
	<body>
		<p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
		<ol>
			<li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
			<li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
			<li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
			<li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
			<li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
			<li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
			<li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
			<li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
			<li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
			<li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
			<li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
			<li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
		</ol>
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

#### 3. HTML 기초 2: 내용요소과 강조

```html
<!DOCTYPE html>
	<html lnag=ko-KR>
		<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta charset="UTF-8">
			<!--[if lte IE 9]>
				<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
			<![endif]-->
			<link rel="shortcut icon" type="image/png" href="./favicon.png">
			<link rel="apple-touch-icon" href="favicon.png">
				<title>웹 기초 이해하기</title>
			<style type="text/css">
				a{text-decoration: none;}
				.main>a {font-size:30pt;}
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
		<p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
		<ol>
			<li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
			<li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
			<li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
			<li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
			<li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
			<li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
			<li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
			<li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
			<li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
			<li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
			<li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
			<li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
		</ol>

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

#### 4. HTML 기초 3: 목록 만들기

```html
<!DOCTYPE html>
<html lang="ko-KR">
	<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <!--[if lte IE 9]>
    	<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
    <![endif]-->
    <link rel="shortcut icon" type="image/png" href="./favicon.png">
    <link rel="apple-touch-icon" href="favicon.png">
    	<title>웹 기초 이해하기</title>
    <style type="text/css">
    	a{text-decoration: none;}
    	.main>a {font-size:30pt;}
    </style>
	</head>
	<body>
		<p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
		<ol>
			<li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
			<li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
			<li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
			<li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
			<li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
			<li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
			<li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
			<li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
			<li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
			<li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
			<li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
			<li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
		</ol>
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

#### 5. HTML, CSS: Table만들기-1

```html
<!DOCTYPE html>
<!-- table_01.html -->
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8">
    <title> 웹 기초 이해하기</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if lte IE 9]>
    <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
  <![endif]-->
  <link rel="apple-touch-icon" href="./favicon.png">
  <link rel="shortcut icon" type="image/png" href="favicon.png">
    <style type="text/css">
      table, th, tr, td{border-width: 1px; border-style: solid; border-color: #acf; border-spacing:0; border-collapse: collapse;}
      table{width:800px; height: 600px}
       /*1px이 최하 단위 
        스페이싱 0하면 두꺼워지기 때문에 collapse를 해서 합쳐야한다.*/
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>
<!-- ======================== -->
    <h1>웹기초 코드 이해하기</h1>
    <h2>table 이해하기</h2>
    <table>
    <!-- <table border="1">
     과거에 썻던 html 테두리 만들기, merge하기.
     지금은 CSS로 만들김
     테이블 사용: 대진표, 게시판, 등 -->
      <caption>테이블 제목</caption> 
      <tr>
        <th>내용</th>
        <th>내용</th>
        <th>내용</th>
        <th>내용</th>
      </tr>
      <tr>
        <td>내용</td>
        <td colspan="2">내용</td>
        <td>내용</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td rowspan="2">내용</td>
        <td>내용</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>
     </table>

      <hr />

    <table>
          <caption>table 테스트하기</caption> 
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-4</td>
        <td>1-5</td>
      </tr>
      <tr>
        <td colspan="2">2-1</td>
        <td>2-3</td>
        <td>2-4</td>
        <td rowspan="4">2-5</td>
      </tr>
      <tr>
        <td rowspan="2">3-1</td>
        <td colspan="3">3-2</td>
        </tr>
      <tr>
        <td rowspan="2" colspan="2">4-2</td>
        <td>4-4</td>
      </tr>
      <tr>
        <td>5-1</td>
        <td>5-4</td>
      </tr>
    </table>
      <hr />
  </body>
</html>
```

#### 6. HTML, CSS: Table만들기-2

```html
<!DOCTYPE html>
<!-- table_02.html -->
<html lang="ko-KR">
<head>
    <meta charset="UTF-8">
    <title> 웹 기초 이해하기</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if lte IE 9]>
    <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
  <![endif]-->
  <link rel="shortcut icon" type="image/png" href="./favicon.png">
  <link rel="apple-touch-icon" href="./favicon.png">
  <style>
    table{width:600px;}
    table, tr, th, td {border-width: 1px; border-style: solid; border-color: #f50; border-spacing: 0; border-collapse: collapse;}
    .hidden{display:block; width:0; height: 0; overflow:hidden;}
    /*display: block (강제로 블록으로); 사이즈넘치면 안보기하는것*/
    .one{width:50px; background-color: #059; color: #fff;}
    .two{background-color: #fa0; text-align: center;}

    a{text-decoration: none;}
    .main>a {font-size:30pt;}
    </style>
  </head>
    
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>
<!-- ======================== -->
  <h1>웹 기초 이해하기<h1>
  <h2>표이해하기2</h2>

  <table summary="이천십구년 기준 음식에 대한 정보 파악하기">
    <!-- 과거: caption만 하면 정확히 알기 힘들어 summary해야한다. 
    두번 제목이 나오니깐... / 없어진 기능/
    자세하게 쓴다. (접근성때문에: 못보는 사람을 위해서..)
    지금 대안: <span class="hidden" 한 후 CSS에서 사이즈 넘치면 안보이게 하는것
    .hidden{display:block; width:0; height: 0; overflow:hidden;} -->
    <caption>
        <span class="hidden">이천십구년 기준</span>
        음식 <span class="hidden">에 대한 정보 파악하기</span>
    </caption>
    <tr>
      <th class=one>순서</th>
      <th class=two>음식이름</th>
      <th class=two>내용</th>
      <th>가격</th>
    </tr>
    <tr>
      <th class=one>1</th>
      <td class=two>곱창</td>
      <td class=two>소, 돼지의 창자</td>
      <td>15000원</td>
    </tr>
    <tr>
      <th class=one>2</th>
      <td class=two>대창 </td>
      <td class=two>부드럽고 맛나는 부위</td>
      <td>20000원</td>
    </tr>
    <tr>
      <th class=one>3</th>
      <td class=two>막창</td>
      <td class=two>나오자마자 먹어야하는 부위</td>
      <td>12000원</td>
    </tr>
    <!-- 색깔 주는 방법 
        1. class 정한후 CSS에서 바꾸기
        -> 일일히 클라스를 적어야한다.  -->
  </table>

  <hr />

    <table summary="이천십구년 세계 스마트폰 제조사 제품과 성능 파악하기">
    <caption>
        <span class="hidden">이천십구년 세계 </span>
        스마트폰 제조사<span class="hidden">제품과 성능 파악하기</span>
    </caption>

    <!--colgroup: 세로로 한줄 / 
      한번 쓸때마다 한줄씩
      여러줄로 하고 싶으면 span="숫자"
      (적용이 안될수가 있다. / 실제로 잘 사용X)  -->

    <colgroup>
      <col class="one"/>
      <col class="two"/ span="2"/>
      <col class="one"/>
      <col class="none"/>
    </colgroup>
    <!--thead = 제목
        tbody = 내용
        tfoot = 회계 (결과) 무조건 밑에
        head - foot - body 순으로 쓴다.
        왜냐하면 이거의 정보는 결과인데 자세한 내용은 이래요.. 라고 설명해야하니깐
        먼저쓰든 나중에 쓰든 관계없이 thead 맨위 / tfoot 맨 마지막 -->
    <thead>
     <tr>
       <th >제조사</th>clas
       <th >제품명</th>
       <th >성능</th>
       <th>무선충전유무</th>
       <th>가격</th>
     </tr>
    </thead>
    <tfoot>
     <tr>
       <td>3개회사</td>
       <td>3개회사</td>
       <td>3개회사</td>
       <td>3개회사</td>
       <td>3개회사</td>
     </tr>
    </tfoot>
    <tbody>
     <tr>
       <td>애플</td>
       <td>아이폰11</td>
       <td>최신</td>
       <td>가능</td>
       <td>200만원 </td>
     </tr>
     <tr>
       <td>삼성</td>
       <td>노트10 </td>
       <td>최신</td>
       <td>가능</td>
       <td>129만원 </td>
     </tr>
     <tr>
       <td>엘지</td>
       <td>v50</td>
       <td>조금된것</td>
       <td>가능</td>
       <td>129만원</td>
     </tr>
     <tr>
       <td>샤오미</td>
       <td>미믹스 </td>
       <td>아직미전</td>
       <td>가능</td>
       <td>80만원</td>
     </tr>
    </tbody>

</body>
</html>
```

#### 7. HTML, Form 만들기-1

```html
<!DOCTYPE html>
<!--form_01.html-->
<html lang="ko-KR">
 <head>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta charset="UTF-8">
    <!--[if let IE 6]
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
    <![endif]-->
   <link rel="shortcut icon" type="image/png" href="./favicon.png">
   <link rel="apple-touch-icon" href="./favicon.png">
   <title>웹 기초 이해하기</title>
   <!-- CSS ========================================== -->
   <style type="text/css">
    .hidden{font-size: 0}
    a{text-decoration: none;}
    .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>
   <!-- layout ========================================== -->
   <h1>웹기초이해하기</h1>
   <h2>form 기초 1</h2>
    <p> form이란, 양방향 통신이 가능한 형식으로, 필요한 기능을 입력 또는 선택했을 경우 <br />
   원하는 의사전달을 가능하도록 요청하는 기능 </p>
    <p> 예) 검색, id/pw, sns 메신저 보내기, 댓글달기, 회원가입, 주문, 설문조사, 동의체크 등 </p>
    <p> <strong>form 사용시 주의사항</strong>: 백엔드 개발자와 협의를 많이하는 영역이기에 보다 더 정확하게 처리하는 것이 중요</p>
   <hr />
   
   <h3> form 기본양식 </h3>
   <!--form을 사용하겠다는 유무처리:
      method: 정보를 다루는 성격 - 공개(get)/보안(post) , 삭제/수정 (9가지종류)
       get: 공개 / 자료가 많다./ 오픈자료 / 쉽게 접근가능
          (웹사이트? = 뒤에있는것이 보안처리)
       post: 보안 / 본인이 아니면 볼수없다(우편봉투), 필요한 자료만 있음 / 비공개 / 쉽게 접근 불가능 / 무겁다 (로그인후 보는건 다 post이다)
      action: database를 관리하는 사람 /보안관리 (PHP, JSP, ASP)\
              database를 관리 
              작성 및 처리한 자료를 넘겨주는 경로 (url)
              자료를 어디에다가 넘겨줄거냐?
              # 아직 없을경우 (임의)
    -->
    <form method="get" action="#"> 
     <h4>구역형태</h4>
     <fieldset>
      <legend> form 기능의 부분 제목 / 구역의 제목 </legend>
      <label for="yourname">사용자의 성함<span class= "hidden">을 입력해주세요</span></label>
      <input type="text" id="yourname" name="" value="내용을 입력하세요.">
      <!-- 인풋 싱글 태그, 아이디 비밀번호 
        무조건 딸려오는 속성 (type=, id, name, value )
        type = 해당하는 input요소의 기능, 형태를 설정, 정확한 목적에 맞는 type선정
            예: text(글자가 보임), password(글자가 안보임) color (색상 선택) checkbox 체크박스
        id = html 문서에서 한번만 사용이 가능한 이름, #하고 위치 찾아감
            무언가(label 작성: 라벨 읽는건: 레이블)에 대한 연결
            form 내부에서는 label 과 연결해서 접근성에 좋게 만든다
        name = form에 있는 action을 통해 전달되는 이름 ("HTML"id/class)
            관리하는 이름 (관리/사용하기 편하게 만든 이름) / 관리용 이름
            백엔드 개발자랑 이야기해서 나오는 이름
        value: 입력한 값을 전달할려는 값 / 전달하려는 값을 저장하는 임시 공간
              임시저장공간 (미리 입력되있는 글씨 아이디 옛날에는 value에서 해서 자바스크립트로 클릭(포커스)할경우 자동없애는 제어. 
              내용을 입력하세요 - 지우고 써야하는 불편함 (미리 값을 썻다.)
              빈공간에 누가 썻다면 자연적으로 써있다.)
        label 사용자성함을 클릭할때 내용을 입력으로 자동 연결 (접근성에서 중요한 내용)  span 사용해서 안보이기 하기! 
        
        input은 크기를 가질수 있는 인라인(inline) 요소
        input은 여러게를 하면 옆으로 나란히~
         -->

         <!--input에 있는 type 설명 
          form은 html 5 이전과 이후로 나뉜다.
          이전기능: input에 있는 type 형식 
          <input type ="  ">
          1)입력 : 말그대로 글자를 입력
            text : 일반 글자로 보이게 할건지?
            password: ****

          2)선택 :
            radio : 주파수  동그라미 한번 선택하면 한개만
            checkbox : 사각형 다중선택 가능 취소취소 (멀티선택)

          3)버튼
            reset : 초기화 삭제
            submit : 확인/전달 (장바구니/결제) image랑 같음 새로운 페이지 / 새로고침
            image : submit형태를 이미지로 바꾼 형태 (submit과 같음)
            file : 파일선택하고 업로드
            button : 확인과 취소 외에는 다 이 버튼 (예 검색, 메뉴, 주소검색) 광고 선택 좌우 

          4)특수형태
            hidden 숨기는 기능 안보이는 기능 (예 회원가입 개인정보 수정 못하게 하는것 숨겨놓는것 id랑 주민등록번호 / 정보보안/)

          5) 멀티 <input 형식 X>
            입력 <textarea> </textarea> 카톡
            선택 <select> <option> 
            버튼  <button>

          이후기능: input에 있는 type 형식 
          <input type ="  ">
          1)입력 : 말그대로 글자를 입력
            tel : 컴퓨터 쿼터 / 스마트폰: 숫자키보드
            url : 웹페이지 주소
            email: 이메일 주소
            (x)date: 날짜 (X)

          2)선택 :
           color 색상
           range: 숫자 입력시 슬라이더 형태
           (입력)number 물건 수량, 숫자 입력/선택
           etc....  

          3)버튼
          더이상없음 (그대로)

          4)특수형태
          더이상없음 (그대로)

          5) 멀티 <input 형식 X>
          
          주의사항: 여유를 두고 작업 : 모양이 다 다르다!!!!
          이유: 텍스트 윈도우 사각형 맥 동그라미 사각형
         -->
         <!-- 정리
         form 사용할때는 method, action
         fieldset 제목: legend
         input은 label과 함께 사용
         input: type, name, value, id -->
     </fieldset>
    </form>
    <h4>장바구니</h4>
     <fieldset>
       <legend> 장바구니 물품항목</legend>
     </fieldset>
     <h4>배송주소</h4>
     <fieldset>
       <legend>주소지 선택</legend>
     </fieldset>
    <h4>결제시스템</h4>
     <fieldset>
       <legend>결제방식을 선택</legend>
     </fieldset>
 </body>
</html>
```

#### 8. HTML, Form 만들기-2

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if lte IE 9]>
    <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
  <![endif]-->
  <link rel="apple-touch-icon" href="./favicon.png">
  <link rel="shortcut icon" type="image/png" href="favicon.png">
  <meta charset="UTF-8">
  <title>웹 기초 이해하기</title>
  <!-- CSS================ -->
  <style type="text/css">
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>
<!-- ======================== -->
  <!-- layout -->
  <h1>웹 기초 이해하기</h1>
  <h2><abbr title="hiper text markup language version5">HTML5</abbr>이전에 사용한 Form 기능 이해하기 2</h2>
  <form action="#" method="post">
    <fieldset>
      <legend> 입력형 type</legend>
      <label for="userId">아이디를 입력하세요</label>
        <input type="text" id="userId" name="userId" value="" placeholder="아이디" /> 
        <br />
      <label for="userPw">비밀번호를 입력하세요</label>
        <input type="password" id="userPw" name="userPw" value="패스워드"/>  <br />
    </fieldset>

    <!-- ================ -->

    <fieldset>
      <legend> 선택형 type</legend>
      <p> 다음중 가장 괜찮은 사람을 고르시오</p>
      <ol>
        <li>
          <input type="radio" id="guy_01" name="sel_01" value="" />
          <label for="guy_01">그린컴퓨터 수원점 강사 이도형</label>
        </li>
        <li>
          <input type="radio" id="guy_02" name="sel_01" value="" />
          <label for="guy_02">xido쌤</label>
        </li>
         <li>
          <input type="radio" id="guy_03" name="sel_01" checked="checked" value="" />
          <label for="guy_03">2019년 8월 13일 부터 강의하는 강사</label>
        </li>
        <li>
          <input type="radio" id="guy_04" name="sel_01" value="" />
          <label for="guy_04">지금 수업하고 있는 남자</label>
        </li>
      </ol>

      <p>오늘 먹고 싶은 음식을 선택하시오</p>
      <ul>
        <li>
          <label for="selFood_01">칼국수</label>
          <input type="checkbox" id="selFood_01" name="food" value="칼국수"/>
        </li>
        <li>
          <label for="selFood_02">짬뽕</label>
          <input type="checkbox" id="selFood_02" name="food" value="짬뽕"/>
        </li>
        <li>
          <label for="selFood_03">짜장면</label>
          <input type="checkbox" id="selFood_03" name="food" value="짜장면"/>
        </li>
        <li>
          <label for="selFood_04">스파게티</label>
          <input type="checkbox" id="selFood_04" name="food" value="스파게티"/>
        </li>
        <li>
          <label for="selFood_05">떡볶이</label>
          <input type="checkbox" checked="checked" id="selFood_05" name="food" value="떡볶이"/>
        </li>
      </ul>
    </fieldset>

    <!-- ================ -->

    <fieldset>
      <legend> 버튼형</legend>
      <!-- input type형식에서 버튼기능은 lable을 사용하지 않아도 무방 다른건 꼭 써야함: 접근성
      굳이 부연설명을 안해도 다 알음 -->
        <ul>
          <li>
            <input type="reset" name="cancel" value="다시태어나고싶어요"/>
          </li>
          <li>
            <input type="submit" name="ok" value="동의 및 전송"/>
          </li>
          <li>
            <input type="image" src="./favicon.png" alt="전송버튼에대한설명" name="ok2" value="동의"/>
          </li>
          <li>
            <input type="file" name="data" value=""/>
          </li>
          <li>
            <input type="button" name="btn" value="다시태어나기"/>
          </li>
          <li></li>
        </ul>
    </fieldset>

    <!-- ================ -->

    <fieldset>
      <legend> 특수형</legend>
      <!--관리자형식에 필요한 기능으로 사용자에게는 드러나지 않ㄴ는 기능 -->
      <input type="hidden" name="beforName" value="이전에사용한 이름"/>
    </fieldset>    
    
    <!-- ================ -->
    
    <fieldset>
      <legend> 멀티형</legend>
      <!--입력형의 대한 것 
        cols 가로 row 세로 /영어기준  -->
      <label for="multiText"></label>
      <textarea cols="50" rows="20" name="multiText" value="전송메세지" id="multiText" maxlength="50" readonly="readonly"></textarea>

    <br/>

      <label for="selProduct">원하는 상품을 선택하세요.</label>
      <select name="selProduct" id="selProduct" multiple>
        <option>상품을 선택하세요</option>
        <option value="스마트폰">스마트폰</option>
        <option value="노트북">노트북</option>
        <option value="볼펜">볼펜</option>
        <option value="포스트잇">포스트잇</option>
        <option value="텀블러">텀블러</option>
        <option value="커피세트">커피세트</option>
        <option value="지갑">지갑</option>
        <option value="악세사리">악세사리</option>
        <option value="옷&신발">옷&신발</option>
      </select>
   <br/>
   <br/>
      <label for="selProduct">원하는 상품을 선택하세요.</label>
      <select name="selProduct" id="selProduct" >
        <option>상품을 선택하세요</option>
        <optgroup label="비싼거">
        <option value="스마트폰">스마트폰</option>
        <option value="노트북">노트북</option>
        <option value="지갑">지갑</option>
        </optgroup>
        <optgroup label="싼거">
        <option value="포스트잇">포스트잇</option>
        <option value="텀블러">텀블러</option>
        <option value="커피세트">커피세트</option>
        <option value="볼펜">볼펜</option>
        <option value="악세사리">악세사리</option>
        <option value="옷&신발">옷&신발</option>
        </optgroup>
      </select>
   <hr/>
      <button type="reset">취소버튼역할을 하는 요소</button>
      <button type="submit">확인버튼역할을 하는 요소</button>
      <button type="button">기본버튼역할을 하는 요소</button>

      <button>버튼역할을 하는 요소</button>
    <!-- <button> </button> 사용시 기본타입은 submit
      type하고 다 일일히 적어놓아라 
      버튼은 특수성 form태그랑 같이 안잇어도 되긴한다.
      여러사진 볼때 다음사진으로 넘길때 많이 사용
    -->
    </fieldset>
    <!-- ================ -->
  </form>
  <!-- SCRIPT -->
</body>
</html>

<!--
  FORM 요소는 쇼핑몰제외 7%만 사용
  게시판 회원가입 로그인창 회원정보수정
  잘못하면 개인정보 유출... ~~~~
  [기본형]
  <form action="#" method="post">
    <fieldset>
      <legend> 입력형 type</legend>
      <label for=""></label>
        <input type="" id="" name="" value="">
    </fieldset>
        text는 미리 입력되있던지 나중에 입력 가능
        [radio]
          userId (앞에만 대문자 카멜 문자?)
        <li>
          <label for="guy_01">1234</label>
          <input type="radio" id="guy_01" name="" value="" />
        </li>
        체크가 뒤에 있다. 레이블과 인풋 위치 바꿔라
      하나의 답만 유추해야해서!
        name에 들어가는 이름이 하나로 등록되있어야 한개의 정답으로 나온다. 
        input에 값을 똑같이하거나 name을 같이해야한다.
        radio 는 값이 없다. value에 실제 이름을 써야한다. 보이는거랑 value값이 같아야한다.
        각각에 값을 미리 세팅해야한다. 직접입력
        --------------- 
        style에서 ol, li 숫자랑 라디오 순서 바꾸기.
        ol,li {list-styple:none;}
     
        라디오는 한번선택하면 안풀림

        체크박스 한번선택하고 두번선택하면 없어짐

        input checked="checked" 하면 무조건 선택된다! 처음부터 선택된다. (radio, checkbox 둘다)
        
        디테일한건 자바스크립트 (두개선택만)
          
          브라우져마다 이름이 다르게 나온다.
          reset 초기화 
          submit 제출 / 쿼리전송
          value에서 정한다. value에 정한 내용으로 나온다. 
          취소가 먼저 나온다. 접근성 (사용자의 배려)

          이미지는 이미지를 참조해야한다.
          이미지 경로랑 설명을 해야한다

          파일 value 공백!

          <li>
            <input type="button" name="btn" value="주소검색/약도보기/다음/다음내용보기버튼">
          </li>

          hidden 값이 안보인다.

          최초의 사용자가 
          아이디:jextist가입
          비밀번호:****
          주소:
          연락처:

          수정하고싶어용

          id를 보고 불러온다.
          아이디: 
          비밀번호
          주소:
          연락처:  

          아이디만 빼고 수정가능
          수정은 못하는데 존재는 해야한다. hidden
          아이디로 다시 돌아가야하기 때문에 
          소비자를 위한게 아니고 개발자 관리자를 위한 태그

          multi 사이즈 늘어난다. 

          maxlength: 최대 글자수 제한
      
      <legend> 멀티형</legend>

      <label for="multiText"></label>
      <textarea cols="50" rows="20" name="multiText" value="전송메세지" id="multiText" maxlength="50">
      </textarea>

      ->>계약서를 쓰는 경우도 많은데 textarea는 수정이 가능하기때문에 사용하면 안된댱
      
      readonly = text박스는 있지만 읽을수밖에없다. 
      
      처음에 의미 없는건 value값을 선택 안해야한다.
      option안에 value가 들어가야한다.

      select > optgrout > option
      -->
```

#### 9. HTML, Form 만들기-3

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<!--[if lte IE 9]>
		<script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
	<![endif]-->
	<link rel="shortcut icon" type="image/png" href="./favicon.png">
	<link rel="apple-touch-icon" href="favicon.png">
	<title>웹 기초 이해하기</title>
	<!-- CSS=================== -->
	<style type="text/css">
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>

	<!-- layout================ -->
	<h1> 웹기초이해하기 </h1>
	<h2>Form기능 이해하기 3 - HTML5 형식에 추가된 기능 이해하기</h2>
		<form action="#" method="get">
			<fieldset>
				<legend>자주사용하는 형식</legend>
				<ul>
					<li>
						<label for="searchBar">검색</label>
						<input type="search" id="searchBar" name="searchBar" value="" required="required" placeholder="검색하세요" />
					</li>
					<li>
						<label for="telNum">전화번호</label>
						<input type="tel" id="telNum" name="telNum" value="" required="required" />
					</li>
					<li>
						<label for="urlText">웹사이트</label>
						<input type="url" id="urlText" name="urlText" value="" required="required" />
					</li>
					<li>
						<label for="mailText">이메일</label>
						<input type="email" id="mailText" name="mailText" value="" required="required" />
					</li>					
				</ul>
			</fieldset>
		<!-- ===================== -->
			<fieldset>
				<legend>아직은 브라우저 제약 많은 형식</legend>
			</fieldset>
		<!-- ===================== -->
			<fieldset>
				<legend>사용 가능하지만 그 기능이 현재 애매한 상태</legend>
				<ul>
					<li>
						<label for="num">갯수입력</label>
						<input type="number" id="num" name="num" value="" min="-2" max="3" step="" required />
					</li>
					<li>
						<label for="ran">갯수입력</label>
						<input type="range" id="ran" name="ran" value="" min="1" max="" step="" />
					</li>
					<li>
						<label for="colorSel">색상선택</label>
						<input type="color" id="colorSel" name="colorSel" value="">
					</li>
					</li>
					<li>
						<label for="dateSel">날짜선택</label>
						<input type="date" id="dateSel" name="dateSel" value="">
						<!-- 2019.9.5 현재기준 날짜, 시간과 관련된 type 속성은 사용할수없다. 브라우져마다 다르고 제약이 엄청 많다. -->
					</li>
					<li>
						<label for="message">전달할말</label>
						<input type="text" id="message" name="message" value="" list="messageSample">
						<datalist id="messageSample">
							<option value="집가고싶어요"></option>
							<option value="숙제주시마세요"></option>
							<option value="쉬고싶어요"></option>
						</datalist>
					</li>
				</ul>
			</fieldset>
		<!-- ===================== -->
			<!-- 
				form 영역은 브라우져마다 다 다른다. 
 				search 다른 기능없는데 그냥 검색하기 쉽게 바뀜
				tel 스마트폰으로 할때 숫자 키패드가 나오게함 
				웹사이트나 이메일 required (필수항목)하면
				웹사이트 http:
				이메일 @---. 
				이런 형식이 아닐경우.,, 안됨..
				value에다가 하면 안지워져서 placeholder에다가 적는다.
				num / range 
				마이너스도 나온다. 최소 최대 단위넘어가기 (몇배)
				explored 는 num step 안먹는다.
				color 테마 배경색깔 바꿀때 사용 일부브라우져는 직접입력

				select datalist 차이
				-select 필요한걸 선택하고 나면 바꿀수없다.
				- datalist필요한거 선택햇다가 다시 쓸수있다. (원하는 메세지를 쓸수도 있고 선택도 가능한거)
				--> 
			<button type="submit">확인 및 전송</button>
		</form>
	<!-- script================ -->
</body>
</html>
```

#### 10. HTML : Semantic 구조-1

```html
<!DOCTYPE html>
<!--semantic_01.html-->
<html lang="ko-KR">
 <head>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta charset="UTF-8">
      <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
      <![endif]-->
   <link rel="shortcut icon" type="image/png" href="./favicon.png">
   <link rel="apple-touch-icon" href="./favicon.png">
   <title>웹 기초 이해하기</title>
   <!-- CSS ===================================== -->
   <style type="text/css">
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>
   <!-- layout ================================== -->
    <h1>웹기초이해하기</h1>
    <h2>의미를 부여하여 제작하는 시멘틱구조이해하기</h2>
    <!-- ======================================== -->
    <div>
      <h3>기본형 시멘틱구조</h3>
      <!-- div: div는 영역을 가질 수 있는 형태이지만, 의미없이 사용하는 분할 영역으로 쓰인다. 그렇기 때문에 하나의 페이지에서 각각의 의미를 부여하여 제작하기에는 다소 어렵다
      <div>
       <header>
         <nav></nav>
       </header>
       <main>
         <aside></aside>
         <section></section>
         <article></article>
       </main>
       <footer></footer>
      </div>
        header: 사이트의 주요한 내용을 담는 곳으로, 로고, 전체 네비게이션을 담는 곳
        nav: 각각의 페이지로 이동하는 경로를 모아놓는곳
        main: 문서의 주요내용을 정의할때 사용, article/header/nav/footer의 하위 (후손요서)로 사용X
        aside: 있으면 좋지만, 꼭 있어야하는 기능은 아닌것을 모아놓은 곳 (사이드바 옆에 달린것)
        section: 다양한 문서들 중 관계가 있는 문서를 분리하는 역할 (작은웹페이지), 별도의 다른 주제(광고영역/등)
        article: 내용이 독립적으로 분류되어있고 설명이 들어있는 영역 (뉴스,블로그 글내용, 게시판 공지사항)
        footer 페이지 정보를 요약 정리하여 담은곳 (회사주소, 이용약관, copyright)
        -단, 시멘틱 구조는 IE에서는 인지 할 수 없는 요소, css 에서 displacy:block 으로 강제 블록처리 
        - 하나더, 해당 시맨틱 구조는 반드시 이름을 달아주어야한다. (IE에서 인지X)
        -그리고, 시멘틱 구조는 그 구조 자체로는 의미를 부여할수 있지만,해당 제목이 반영되지 않았기 때문에 의미에 맞는 제목을 작성해줘야한다. 
  
        네비게이션:  globalNavigationBar =gnbBox (navBox)

=============================================================
        id class 이름 작성하는 요령:
        - 이름은 영문 소문자를 기준, 첫글자는 무조건 영문 소문자로 시작 (_, $ 제외) 
        - _ 와 $를 제외한 특수문자를 사용할수없다. (-는 특수문자X) 
        - 숫자도 사용 X

        [HTML]
        1. camelCase : 낙타등모양처럼 뒤에오는 단어의 첫글자를 대문자로 사용하는 방법
        2. snake_bar(under_bar) : 단어와 단어의 사이에 _를 이용하여 구분방법
        3. hipen-bar : 단어와 단어 사이에 -을 붙여서 구분하는 방법 (class이름을 사용할때 / 잘사용안함 / 밖에서 가져온 파일이름이랑 곂칠경우가잇음)
-------------------------------------------------------------
        [JabaScript]
        4. PascalCase : 첫글자를 대문자로 시작하여, 각 단어의 첫글자를 대문자로 
        5.  _hidden : 첫글자를 _를 작성하여 사용
        darum.daum.net = 신입가르치기위한 코딩 사이트 
       -->
<!-- ======================================== -->
      <div class="wrap">
       <header id="headBox">
         <h1> 사이트 이름/기능 로고</h1>
         <nav id="gnbBox">
           <h2>전체 네비게이션</h2>
         </nav>
       </header>

       <main id="contentBox">
        <h2>본문내용</h2>
         <aside id="sideBox">
           <h3>보조영역</h3>
         </aside>
         <section id="viewBox">
           <h3> 광고영역 </h3>
         </section>
         <article id="newsBox">
           <h3>공지사항</h3>
         </article>
       </main>

       <footer id="footBox">
         <h2>회사정보</h2>
       </footer>
      </div>
    </div>
    <!-- ======================================= -->
   <!-- style =================================== -->
   <script type="text/javascript">
   </script>
 </body>
</html>
```

#### 11. HTML : Semantic 구조-2

```html
<!DOCTYPE html>
<!-- semantic_02.html -->
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
      <![endif]-->
  <link rel="shortcut icon" type="image/png" href="./favicon.png">
  <link rel="apple-touch-icon" href="./favicon.png">
  <title>웹 기초 이해하기</title>
  
  <!-- CSS ===================== -->
   <style type="text/css">
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>    
  </style>
</head>

<body>
  <!-- Layout ===================== -->
  <h1>웹기초이해하기</h1>
  <h2>HTML5 추가코드 이해하기</h2>
  <!-- img 태그 <div> <img> <p> 했는데 복잡   -->

  <figure>
    <figcaption>이미지에 대한 제목</figcaption>
    <img src="이미지 경로" alt="이미지의 설명">
    <img src="이미지 경로" alt="이미지의 설명">
    <img src="이미지 경로" alt="이미지의 설명">
  </figure>

  <!-- 외부 문서를 불러올때 , youtube , 또다른 html ,  -->
  <iframe src="문서를 불러오는 "></iframe>

  <!-- 외부 문서를 불러오는 기능 , 이미지 svg, (flash파일 불러오는 기능)  -->
  <embed>외부문서 </embed>
  
  <!-- 형광펜 처리 / 마킹체크 -->
  <mark>형광펜 </mark>

  <!-- input 처리되어 일부내용을 내보내는 기능 / 인풋을 내보내는 기능 -->
  <output></output>

  <hr />

  <h2>HTML5에서 사라지는 코드 이해하기(쓰지않는다)</h2>
  
  <hgroup></hgroup> <!-- h끼리 그룹하기 -->
  <strike></strike> <s></s> <!-- 취소선 -->
  <dir></dir> <!-- 목록 나타내는 것 -->
  <font></font> <!-- 폰트종류  -->
  <big></big> <small> </small> <!-- 글자크기조절 -->

  <!-- 2014년 10월전부터 영상 X 음악 못들었음 (2017년 실제 사용)
      과거에는 플러그인 사용. (실버라이트, 플래시)

      video
      사용가능한 확장자: mp4(라이센스 돈이 필요함:firefox지원X->지금가능 / 모두 브라우져 가능)만든제작자한테 주는게 아니라 확장자한테 돈줘야함, ogg(화면,소리),ogv(화면만 나온는것,소리X), webm (구글, 웹에 최적화 )
        익스플로어/사파리 =  일부 다른확장자는 지원안할수도잇다. : ogg, ogv, webm 
      audio  => 확장자 변환!!!
      사용가능한 확장자: mp3(ms거 라이센스지불), ogg(무료: 무거움), wav
   
    https://convertio.co/kr/mp3-ogg/ => 오디오 확장자 변화
    https://www.media.io/ => 비디오 확장자 변환
   --> 
    <!-- DOCTYPE :HTML 버전을 확인할수있다. HTML만 쓸경우 5.0 을 의미  -->

  <!-- Script ==================== -->
</body>
</html>
```

#### 12. HTML : media 파일 불러오기

```html
<!DOCTYPE html>
<!-- media.html -->
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
  <![endif]-->
  <link rel="shortcut icon" type="image/png" href="./favicon.png">
  <link rel="apple-touch-icon" href="./favicon.png">
  <title>웹 기초 이해하기</title>
  <!-- CSS============ -->
   <style type="text/css">
      a{text-decoration: none;}
      .main>a {font-size:30pt;}
    </style>
  </head>
  <body>
    <p class=mian><a href="./index.html">웹 기초 이해하기</a></p>
    <ol>
      <li><a href="./basic_setting.html"> HTML 기본세팅</a></li>
      <li><a href="./basic_01.html">HTML 기초 1: 제목과 내용</a></li>
      <li><a href="./basic_02.html">HTML 기초 2: 내용요소과 강조</a></li>
      <li><a href="./basic_03.html">HTML 기초 3: 목록만들기 </a></li>
      <li><a href="./table_01.html">HTML, CSS: Table만들기-1</a></li>
      <li><a href="./table_02.html">HTML, CSS: Table만들기-2</a></li>
      <li><a href="./form_01.html">HTML : Form 만들기-1</a></li>
      <li><a href="./form_02.html">HTML : Form 만들기-2</a></li>
      <li><a href="./form_03.html">HTML : Form 만들기-3</a></li>
      <li><a href="./semantic_01.html">HTML : Semantic 구조-1</a></li>
      <li><a href="./semantic_02.html">HTML : Semantic 구조-2</a></li>
      <li><a href="./media.html">HTML : Media 파일 불러오기</a></li>
    </ol>  
  </style>
</head>

<body>
  <!-- Layout============= -->
  <h1>웹기초 이해하기</h1>
  <h2>비디오 및 오디오 파일 불러오기</h2>
    <!-- html 5부터 생겨났음 
        audio를 불러와서 끝나는게 아니라 제어하는 controls가 필요 / 재생기
        브라우져마다 모양이 다르다!!!
        src 파일불러오기
        controls 재생장치 controls="controls"
        autoplay 자동재생 autoplay="autoplay" (접근성XXX 배경음악X 소리가 3초이상은 끊어야한다.)
        preload 미리불러오기 preload="preload" 유튜브(로딩), 미리 로딩하는거 (끊김없이 볼수있게) -> 최초의 재생이 느리댜.
        muted : 음속거 모드

        poster = 썸네일 / audio에서는 안되지만 video에서만 가능!

        1초에 빛 깜밖이면 영상 못씀 -> 쓰러짐  피카츄 쇼크
    -->
    <audio controls="controls" src="./media/audio/malhanundero.mp3"></audio> 
    <hr />
    <!-- 확장자 type알려줌 / ogg가 안나오면 ->mp3로 위에나오는게 먼저나옴
          버튼태그 따로 만들고 자바스크립으로 제어가능     -->
   <audio controls="controls" preload="preload">
     <source src="./media/audio/malhanundero.ogg" type="audio/ogg"/>
     <source src="./media/audio/malhanundero.mp3" type="audio/mp3"/>
     <p>여기서 음악을 들어시면 안됩니다. <br />
        <a href="http://google.com/chrome">지원하는 브라우저</a>를 이용하세요</p>
   </audio>

  <br />

   <!-- Video================== -->
   <video controls preload muted poster="favicon.png">
     <source src="./media/video/startcoding.webm" type="video/webm"/>
     <source src="./media/video/startcoding.mp4" type="video/mp4"/>
     <p> 여기는 영상이 나오지 않습니다. <br />
     <a href="http://google.com/chrome">지원하는 브라우저</a>를 이용하세요</p>      
   </video>

  <!-- Script=============== -->
</body>
</html>
```

##### HTML Basic Setting

```html
<!DOCTYPE html>
<!--basic_setting.html-->
<html lang="ko-KR">
 <head>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta charset="UTF-8">

      <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
      <![endif]-->

   <link rel="shortcut icon" type="image/png" href="./favicon.png">
   <link rel="apple-touch-icon" href="./favicon.png">
   <title>Document</title>

   <!-- CSS ===================================== -->
   <style type="text/css">
     div {width:100px; _width:100px; *width:100px; width:_100px;}
   </style>
 </head>

 <body>
   <!-- layout ================================== -->



   <!-- script =================================== -->

   <script type="text/javascript">

   </script>
 </body>
</html>

```

#### HTML UPGRAD SETTING

```html
<!DOCTYPE html>
<!-- ${1:문서이름}.html -->
<html lang="ko-KR">
<head>
  <noscript>
    <p>현재 접속하고 있는 사이트의 기능의 일부가 원활하게 실행되고 있지 않습니다. <br />
    자바스크립트의 기능을 활성화 해주세요.</p>
    <p><a href="http://enable-javascript.com/ko/" target="_blank">
    브라우저에서 자바스크립트 활성화하는 방법</a></p>
  </noscript>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="웹페이지 실습에 따른 목차구성">
  <meta name="keyword" content="html, css, js, web, design, 웹디자인">
  <meta name="author" content="jexists">
  <meta name="generator" content="illustrator, photoshop, sublimetext">

  <!-- Link ===================================== -->
   <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean" rel="stylesheet">
   <link rel="stylesheet" href="../css/base/reset.css">
   <link rel="stylesheet" href="../css/base/common.css">
   <link rel="stylesheet" href="../fonts/fontawesome/css/all.min.css">
   <link rel="stylesheet" href="../css/src/${1:문서이름}.css">

   <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"> </script>
      <script src="../ie/PIE-1.0.0/PIE.js"></script>
      <script src="../ie/Respond-1.4.2/dest/respond.min.js"></script>
   <![endif]-->

  <!-- link favicon ============================= -->
   <link rel="shortcut icon" type="image/png" href="../favicon.png">
  <!-- link touch ============================= -->
   <link rel="apple-touch-icon" href="../favicon.png">
   <title>${2:문서제목}</title>
</head>
<body>
<!-- Layout=================== -->
${3:#wrap>header#headBox>h1>a\{제목\}^^main#contentBox>h2\{부제\}^footer#footBox>h2\{정보\}}

<!-- Script=================== -->
 <script>
     
 </script>
</body>
</html>
```

