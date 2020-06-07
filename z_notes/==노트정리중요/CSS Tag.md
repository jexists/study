# CSS tag

**selector_기본선택자**

```html
<!DOCTYPE html>
<!-- selector_01.html -->
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"></script>
    <![endif]-->
  <link rel="shortcut icon" type="image/png" href="favicon.png"/>
  <link rel="apple-touch-icon" href="pavicon.png">

  <link rel="stylesheet" href="./css/selector_01.css">

  <title>웹 기초 css 이해하기</title>


  <!-- 내가 한거 ===========================
  <style type="text/css">
    h1{background-color: gray; color: yellow;}
    h2{background-color: blue; color:white;}
    .wrap{background-color: yellow; color:blue;}
    .con{border-width: 1px ; border-style: solid; border-color: blue}
    ul .red{color: red;}
    ul .red a{color:inherit;}

    ul>li>.yellow{color: yellow;}
    ul>.blue{color:blue;}
    ul>.blue>a {color:blue;}
    ul .green, ul .green>a{color:green;}

    ol>li>a {color:orange;}
    .bg1{background-color: yellow}
    .bg2{background-color: blue}
    .bg3{background-color: red}
    
  </style>
-->


</head>
<body>
  <h1>웹 기초 CSS 이해하기 (회색배경, 노란글씨)</h1>
  <h2>선택자 이해하기(파란배경, 흰글씨)</h2>

  <div class="wrap">배경색 노랑, 파란글씨 </div>

  <p class="con">Lorem ipsum dolor sit amet.(테두리선)</p>

  <ul id="list">
   <li class="red"><a href="">test_01</a></li> 
   <li><a href="" class="yellow">test_02</a></li> 
   <li><a href="">test_03</a></li> 
   <li class="blue"><a href="">test_04</a></li> 
   <li class="green"><a href="">test_05</a></li> 
  </ul>

  <div class="box">
  <ol id="box">
   <li> <a href=""class="#">주황색 글씨 </a></li> 
   <li>
     <ul>
      <li class="bg1">배경노란색</li>
      <li class="bg2">배경파란색</li>
      <li class="bg3">배경붉은색</li>

     </ul>
   </li>
  </ol>
  </div>
</body>
</html>
```

```css
@charset "UTF-8";

/* selector_01.css */

/* CSS는 줄바꿈이 자동적으로 안된다. 
     view > word wrap > 줄바꿈 (HTML은 자동 )   */

h1 {
    background-color: #777; 
    color: #fa0;
    }  
  /* 이렇게 쓰는것이 다르다. 2가지: 기본 풀려쓰는것 /완전히 줄바꿈*/
h2 {background-color: #07f; color: #fff;}
  /* 같은계열.. 보기쉽게 */

.wrap {background-color: #fa0; color: #07f;}

.con {border-width: 3px; border-style: ridge; border-color: #777;}

/* border-syle: solide, dotted(점선), dashed(직선형), // ridge, double; */

a {color:inherit;}

#list {border-width: 3px; border-style: dashed; border-color: #fa0;}
#list > .red {color: #f33;}
#list li> .yellow {color: #f90;}
#list > .blue {color: #07f;}
#list > .green > a {color:#0a0;}

.box {background-color: #ddf;}
.box li > a {color:#f70;}

.bg1 {background-color: #ff0;}
.bg2 {background-color: #00c;}
.bg3 {background-color: #a00;}




 /*기본적으로 a 요소는 자체 색이 별도로 존재: 파랑색 ;
  body에다가 color를 할때 a태그는 컬러가 먹지 않는다
  a 요소에다가 color하면 색깔이 따로 먹는다. 
   a {inherit;} 속성값이 inherit이라면, 부모의 속성/값을 따르겠다는 의미 };

   white space : 용량 잡아먹는/ 쓸떼없는 스페이스 ;
  

  */

  /*정리!!!!
  
  전체 선택자: *을 이용하여 선택하면 모든 요소를 선택한다.라는 의미
    ex) *{color:#a00;}  
    단 *로 선택하는 것은 사용하지 않는 부분까지 지정하게 되므로, 시스템 성능 저하가 일어나므로, 권장X

     p *{} p안에 있는 모든 속성을 뭘 적용하겠다. 

  type 선택자: html 문서의 요소를 직접 선택하는것 
    ex) body{} html{} p{} h1{} div{};

  ID/Class 선택자:
    id => #
    class => .
    #.을 이용하여 해당 속성의 이름을 선택하여 사용하는 것

  자손(find) 선택자: 띄어쓰기로 구분하여 자손을 선택

  자식(children) 선택자:특수기호인 >를 이용하여 부모, 자식을 구분 선택;


    */
```



---



**selector_선택자 주요기능**

```html

<!DOCTYPE html>
<!-- selector_02.html -->
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if lte IE 9]>
      <script src="./ie/html5shiv-3.7.3/dist/html5shiv.min.js"></script>
    <![endif]-->
  <link rel="shortcut icon" type="image/png" href="favicon.png"/>
  <link rel="apple-touch-icon" href="pavicon.png">

  <link rel="stylesheet" href="./css/selector_02.css">

  <title>웹 기초 css 이해하기</title>
 </head>
 <body>
 	<h1>웹 기초 이해하기</h1>
 	<h2>우선순위 기초 이해하기</h2>

 	<div>
 		<ul>
 			<li class="">
 				<a href="#" class="an_01"><span>텍스트 우선순위 이해하기_01</span></a></li>
 			</li>
 			<li class="">
 				<a href="#" class="an_02"><span>텍스트 우선순위 이해하기_02</span></a></li>
 			</li>
 			<li class="">
 				<a href="#" class="an_03"><span>텍스트 우선순위 이해하기_03</span></a></li>
 			</li>
 			<li class="">
 				<a href="#" class="an_04"><span>텍스트 우선순위 이해하기_04</span></a></li>
 			</li>
 			<li class="">
 				<a href="#" class="an_05"><span>텍스트 우선순위 이해하기_05</span></a></li>
 			</li>
 		</ul>
 	</div>
	
	<p>Lorem ipsum dolor sit amet.</p>
 </body>
 </html>

```

```css
@charset "UTF-8";

/* selector_02.css */

a {color: inherit; text-decoration: none;}

ul a{color:gray;}
li> .an_01{color:orange;}
li a {color:red}
.an_01{color:blue;}


ul a {background-color: red}
li a {background-color: blue}

/*먼저쓴것이 먹는다. */

ul li a {background-color: gray}
/*단, 다 쓸경우는 이것이 먹는다. 많이 언급한 아이가 우선순위*/


/*자식과 자손은 동급이다.
  조건에 따라서 달라진다. 
  어디에서 지정하는거에 따라서 권한이 달라진다. 
  직접할거야 / 강제성 / 등 (우선순위)
  우선순위 먼저 처리하고 나머지는 빼는것
  type: 직접태그보다 우선 class 네이밍 ;
  우선순위: type <. class <# id < 부모선택 < !important(사용X)

  type, class, id, 부모선택은 수정이 되는데 important는 기능쓰면 수정불가

  li >  ul a{} >  a{}

  우선순위 type < class < id < prarents < important
  우선순위를 사용할때, 복합으로 섞이게 되면 언급여부에 따라 순위는 조금 변동될수있다.

!important > 인라인 스타일 속성 > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자


*/



/*pseudo code: 의사전달 코드 (하나의 언어/ 의식의 흐름에 따라 전달 /형체가없다)
	FOCUS: tab을 눌럿을때 상자 나올때
	focus 처리되는 기능은: a, button, input, select, teatarea;
	span:focus{background-color: #000;}  => 안먹는다
	a:focus >span{background-color: #000;} =>먹는다 (a태그가 잇어서)

	focus/active = 동급 쓰는 우선순위 
*/
span{background-color: #ddd;}
span:hover{background-color: #f00;}
a:focus >span {outline-width:5px; outline-style:solid; outline-color: #000;}
a:active > span {background-color: #00f;}
/*outline:5px solid #000; 축약형*/
a:visited >span {color: #fff;}
/*a:focus{background-color: #000;}*/


/*span{background-color: #ddd;}
span:hover{background-color: #f00;}
a:focus >span {background-color: #77A;}
a:active > span {background-color: #00f;}
a:visited >span {color: #fff;}
a:focus{background-color: #000;}



span{background-color: #ddd;}
span:hover{background-color: #f00;}
a:focus >span {background-color: #77A;}
span {background-color: #00f;}
span {color: #fff;}
a:focus{background-color: #000;}*/

p{margin: 100px auto; width: 500px; height: 100px;
	text-align: center; line-height: 100px;
	border-width: 3px; border-style: solid; border-color: #777}

	p:before{content:"어떻게될까요?"; color:#f00; font-weight: bold;}
	p:after{content:"어디에 있을까요"; color:#00f; font-weight: bold;}

	/*회원가입시 필수항목 *옆에 적을때 */
```



display: inline -> 블록을 인라인으로 바꾸기.,,,

inline-block 옆으로 되지만 알수없는 블록 생김..

