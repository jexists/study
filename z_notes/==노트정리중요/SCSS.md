# SASS / SCSS

-CSS가 복잡해지고 스타일 시트가 커지고 유지 보수하기가 어려워 짐에 따라 CSS 전처리 기가 많이 

전처리기 3대장: Less, Sass(SCSS), Stylus

SASS / SCSS 하나의 컴파일러

**Sass** 선택자의 유효범위를 '들여쓰기'로 구분 / {} (중괄호)와 ; (세미콜론) 무 (Stylus비슷)
SASS(Syntactically Awesome Style Sheets) = {}, ; 없고 한줄로 쓰면 에러

**SCSS**  - CSS 같은 문법 + Sass기능 지원 / {} 로 범위를 구분 (Less 비슷)
SCSS = CSS + @  {} (중괄호)와 ; (세미콜론) 유

---

### 웹사이트

https://velopert.com/1712

[https://medium.com/@jsh901220/react%EC%97%90-scss-%EC%A0%81%EC%9A%A9%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-1-c7bd2895f5a6](https://medium.com/@jsh901220/react에-scss-적용및-기본-사용법-1-c7bd2895f5a6)

[https://gomcine.tistory.com/entry/Sass-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-mixin-include-expend-partial-import?category=693292](https://gomcine.tistory.com/entry/Sass-문법-정리-mixin-include-expend-partial-import?category=693292)

https://www.udemy.com/course/css-sass-scss/?LSNPUBID=nbJH6*TrzAA&ranEAID=nbJH6*TrzAA&ranMID=39197&ranSiteID=nbJH6.TrzAA-VrJUpIduSjHQZWSc0Huwgw

https://sass-lang.com/guide

https://github.com/SassDoc/

---

https://sass-lang.com/ - SCSS 언어 홈페이지

https://prepros.io/ - sass 변환프로그램 (node-sass에 비해 느리다.)



```참고 사이트
[Sass 웹사이트 및 블로그]
sass 공식문서 :
http://sass-lang.com/documentation/file.SASS_REFERENCE.html

The Sass Way :
'Sass와 콤파스를 이용한 CSS 작성법에 대한 최신 소식과 주제를 다룹니다.
http://thesassway.com/

CSS Tricks:
크리스 코이어는 Sass를 광범위하게 다루어왔습니다. 여기서 우리는 CSS를 직접 작성하는 분들에게 Sass가 얼마나 유용한지에 대해 유사한 관점을 공유할 수 있습니다. 그의 Sass 스타일 가이드
https://css-tricks.com/sass-style-guide/

Sass 조립하기:
기초부터 고급까지 배울 수 있는 코드스쿨의 Sass 종합코스
https://www.codeschool.com/courses/assembling-sass 

Sass 시작하기:
데이비드 디마리(David Demaree)가 A List Apart에 기고한 훌륭한 입문자용 글
http://alistapart.com/article/getting-started-with-sass

Sass의 미래 들여다보기:
데이비드 월시(David Walsh)는 Sass의 향후 버전에서 새로 추가될 기능들을 평가해 줍니다. Sass가 어디로 향해 가는지에 대한 훌륭한 통찰력을 볼 수 있습니다.
https://davidwalsh.name/future-sass

[믹스인 라이브러리]
콤파스
크리스 엡슈타인이 만든 Sass 확장 프레임워크.
http://compass-style.org/reference/compass/

버번
'간단하고 가벼운 Sass용 믹스인 라이브러리'라고 홍보하는 버번은 보스턴 동료들의 회사인 소트봇을 통해 엄청난 믹스인 자료를 제공합니다.
http://bourbon.io/

출처: https://treasureland.tistory.com/3 [보물섬]
```

## terminal

**(yarn 사용시)**

npm install --global yarn
yarn global add node-sass

$ npm install --global node-sass (node-sass 다운받기)

> npm install --global brower-sync node-sass

$node-sass -v  (node-sass 버전 알아보기)

$node-sass  --watch **--output-sytle nested** scss --output css

> node-sass 실행해라 / --watch (실시간) / scss --output css (내보내라) / style을 ensted라는 스타일로 
> 노드사스를 실시간으로 감지하고 내보낼때 기능을 nested 스타일로 하고 scss을 css폴더로 해라

#### node-scss 지우는 방법

$ npm uninstall --global node-sass

웹사이트: 

https://yarnpkg.com/lang/en/ > node-sass 4.12.0 

[yarn으로 SASS다운받기] 

> 안될경우에는 컴퓨터로 직접다운 https://yarnpkg.com/en/docs/install#windows-stable

$npm install --global yarn

$yarn global add node-sass

### node-scss 실행

SCSS는 HTML에서 먹지않는다. 그래서 SCSS => CSS로 보낼것이다. 

최초 기본 상태 **$node-sass scss --output css** (기본스타일: nested)

#### --output-style

// nested, expanded, **compact**, compressed

> **$ node-sass --output-style compact scss --output css**

>**1. 중첩 스타일 (nested)** : 기본적인 출력 스타일로 중첩 정도에 따라 들여쓰기 함.
>**2. 확장 스타일 (expanded)** : 기존 CSS 스타일과 거의 동일
>**3. 축약 스타일 (compact)** : CSS 규칙을 한 줄에  표시해서 코드의 공간을 최소화함
>**4. 압축 스타일 (compressed)** : 가독성은 고려하지 않음. css 파일 용량을 최대한 줄이기 위한 스타일

#### 실시간 감지

```scss
$node-sass --watch --output-style compact scss --output css/src
```

### SCSS불러오는 방법

```scss
//SCSS불러오는 방법

@import "var";
//동일한 확장자라서 .scss생략가능
//_ 생략가능

@import url("../_basic/var");

//url()을 입력하면 해당 파일을 별도의 파일로 첨부(link)하는 의미
//url()없이 ""로 사용하면 (scss파일), 해당파일을 하나의 파이로 합치는 현상
```

SCSS (& = 변수 var 같은것)

#### [주의사항]

-scss에서 css 주석을 썼을 경우 카피가 된다.
-scss에서 // 주석을 썻을겨우는 카피가 되지않는다.
-css에서 적은것은 scss로 이동되지않는다.
-css에서 적어도 scss에서 적어서 저장하면 scss에 없는것들은 사라진다.  

```scss
// sample.scss /(scss전용주석 / 카피X) 
/*sample.css (카피됨)*/

$full : 80%;
$bg1 : #111;
$color : (#777, #333 ,#f06);
//$ = 변수
h2 {width: $full; height: $full;
	background-color: rgba($bg1, 0.5);
	color:lighten($bg1, 60%);
	border: 2px solid nth($color,-1); 
	font-size: bold;
	} 
```

```css
/*sample.css*/
h2 {
  width: 80%;
  height: 80%;
  background-color: rgba(17, 17, 17, 0.5);
  color: #f7f7f7;
  border: 2px solid #f06;
  font-size: bold; }
```

---

#### position 쉽게하기 (sass interpolation)

```scss
.list_01 {background-position: 0 0;}
.list_02 {background-position: 0 10px;}
.list_03 {background-position: 0 40px;}
.list_04 {background-position: 0 100px;}

/* ======================= */
$myp : (0, 10px, 40px, 100px); //SCSS에서 배열 쓰는 방법
@for $i from 1 to length($myp)+1 {
	.list_0#{$i}{background-position: 0 nth($myp, $i);}
}
//반복문 
```

```css
/* ======================= */
.list_01 {
  background-position: 0 0; }
.list_02 {
  background-position: 0 10px; }
.list_03 {
  background-position: 0 40px; }
.list_04 {
  background-position: 0 100px; }
```

#### 가상 간단하게 쓰기 

```scss
html, body{color:$textColor;}
h1{color:$textColor;}
#headBox h1 a{color:$textColor;}
#headBox h1 a:hover{color:lighten($textColor,30%);}
#headBox h1 a:active{color:darken($textColor,30%);}
//shortcuts
#headBox h1 a{
	color:$textColor;
	&:hover{color:lighten($textColor,30%);}
	&:active{color:darken($textColor,30%);}
    &:focus{color:&textColor;}
}
```

#### .product_list ul li a span{}

```scss
//.product_list ul li a span{}
.product_list{width: 100%;}
.product_list>ul{width: 100%;}
.product_list>ul>li{width: 100%;}
.product_list>ul>li>a{display: block; width: 100%;}
.product_list>ul>li>a>span{display: block; width: 0;}

//.product_list ul li a span{}
.product_list{width: 100%;
	&>ul {width: 90%;}
	&>ul>li{width: 100%;}
} //.product_list

//.product_list ul li a span{}
.product_list{width: 100%;
	&>ul {width: 90%;
	 &>li{width: 100%;
	 	&:nth-child(2){text-align: center}
	 	&:after,
	 	&::after{content: "1234"}
	  &>a{display: block; width: 100%;
	   &:hover{color:rgba($textColor,0.5);}
	   &:active{background-color: #fff;}
	   &>span{display: block; width: 90%;}
	  } // a
	 } //li
	} //ul
} //.product_list

주의점: 
& 누구기준인것인가
}마지막 주석 잘달아라..
```

#### URL 정리

```sass
$urlbase:"../../img/main/";
$url1: $urlbase + "icon/";
.icon_01{background-image: url("../../img/background-image.jpg")}
.icon_02{background-image: url("../../img/background-image.jpg")}
.icon_03{background-image: url("../../img/background-image.jpg")}

.icon_01{background-image: url($urlbase + "login1.jpg");}
.icon_02{background-image: url($url1 + "login1.jpg");}

$myUrl :("icon","model","nature","box");
.icon_03{background-image: url($urlbase + nth($myUrl,2) + "login1.jpg");}
```

#### 자주쓰는 것 (복잡하게 쓰지말자)

```sass
%box{display: block; width: 100%; height: 100%;}
ul{@extend %box;}
li{@extend %box;}

.box:after{content: " "; @extend %box;}
.box::after{content: " "; @extend %box;}

/////////////////////////// 결과
ul, li, .box:after, .box::after { display: block; width: 100%; height: 100%; }
.box:after { content: " "; }
.box::after { content: " "; }
```

#### @MIXIN 만드는것 @include 불러오는것

@mixin name{}

```sass
//mix in 만드는 방법 @mix in name{}
@mixin mybox(){
	display: block; width: 100%; height: 100px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: contain;
	background-attachment: fixted;
}

//@mix in을 불러올때에는 @include name
.my_01 {float: left; @include mybox();}
#wrap {@include mybox();}
```

@mix in  업그레이드

```scss
//mix in 만드는 방법 @mix in name{}
@mixin mybox($u,$r){
	display: block; width: 100%; height: 100px;
	background-image: url($u);
	background-repeat: $r;
	background-position: 50% 50%;
	background-size: contain;
	background-attachment: fixted;
}

//@mix in을 불러올때에는 @include name
.my_01 {float: left; @include mybox($urlbase + "i.jpg",no-reapeat);}
```

#### rem&px변환

```sass
@mixin unit($u){
	width: $u+px; width:($u/16)+rem;
}

.testUnit{@include unit(960);}

/////////////////////////// 결과
.testUnit { width: 960px; width: 60rem; }
```

```sass
@mixin whpx($w, $h){
	width:$w + px; width:($w / 16) + rem; height:$h + px; height:($h / 16) + rem;}
@mixin wpx($w){
	width:$w + px; width:($w / 16) + rem;}
@mixin hpx($h){
	height:$h + px; height:($h / 16) + rem;}
```

#### media 쿼리(?)

```sass
$mob: 480;
$tab: 768;
	@media screen and (min-width:$mob+1) and (max-width:$b+px) {

	}
	
//============================
#wrap{
	width: 100%; height: 100%;
	@media screen and (min-width:600px) {
		width:600px;
		@content;
	}
}
```

#### 중간에 import가능!!!

```scss
// i.scss

@import "./var";
@import "./commonLayout";

@media screen and (max-width: 480px){
	@import "myData.scss";}
//url()을 입력하면 해당 파일을 별도의 파일로 첨부(link)하는 의미 / CSS 파일 글
//url() 개별 scss에서는 의미 없으므로 나중에 지워도 가능
//url()없이 ""로 사용하면 (scss파일), 해당파일을 하나의 파이로 합치는 현상 / CSS 파일 글X
```

#### mixin function 차이점

```scss
@mixin name(){} 
// @include name() "선택자까지 포함 /  풀어낸다. / 넓은범위"
@function(){} 
// myFn(); "값들만 사용 / 계산 / 좁은범위"
```

#### & 사용법

```css
.view_btn{position: absolute; top: 50%; //bottom: 0; margin: auto;
	width: 100%; height: 0;
 >button{float: left; width: 100px; height: 100px; 
 	&.next{float: right;}}}
// 자손요소일 경우에는 &를 안붙여도 가능하다
// 같은 요소일경우네느 &를 꼭 붙여야한다. 
```

#### Mixin Interpolation 

선택자일경우 변수를 그대로 사용X =>**interpolation**(보간/대처)사용: 형태 그대로 대입시키도록 처리

```scss
#{$선택자}
```

```scss
@mixin indicator_01($ind_class, $myW){
	//하단 인디케이터 형태, focus처리되면 해당 버튼이 길게 늘어나는 형태
	//OPT_01: 인디케이터 버튼 하나의 크기 $myW로 설정
	//OPT_02: class선택자의 이름 설정 $ind_class
	//[기본구조] $ind_clss > ul > li > a 순서
#{$ind_class}{ $w:$myW; $f:100%;
 	position: absolute; left: 50%; bottom:$w; transform:translateX(-50%);
 	margin: auto; width:auto; min-width: 135px; 
 	height: $w; padding: 5px; 
 	border-radius: $w; background-color: $wt;
 >ul{width: $f; height: $f;
  >li{float:left; width: auto; height: $w; 
  	margin-left: 5px;  
  &:first-child{margin-left: 0;}
	a{display: block; width: $w; height: $f; border-radius: $w;
		background-color: $gy; transition: all 300ms ease;
	 &:hover{background-color: lighten($pmC,30%);}
	 &:focus{background-color: $pmC; width: ($w * 3); border-radius: $w;
	 	outline: none;}}}}}
}// mixin indicatory_01
// 불러오기 =========================================
@include indicator_01('.view_indicator', 30px);
```

#### 지정가능하고 지정안하면 자동으로 100%

```scss
//a요소 사이트 설정, 내부 span요소를 숨기게 만들기
@mixin link($w:100%, $h:100%){
	display: block; width: $w; height: $h;
	>span{@include hdTxt;}}
```

#### @content: 내부에 추가 내용을 넣기 위해서 

```scss
//a요소 사이트 설정, 내부 span요소를 숨기게 만들기 ===========
@mixin link($w:100%, $h:100%){
	display: block; width: $w; height: $h;
	@content;
	>span{@include hdTxt;}}
```

### Mixin 만들기

```scss
//내부에 있는 text 숨기는 기능 처리하기  ===========
 @mixin hdTxt(){
 display:block; position: absolute; z-index: -1;
	  	overflow: hidden; width: 0; height: 0;}

//a요소 사이트 설정, 내부 span요소를 숨기게 만들기 ===========
@mixin link($w:100%, $h:100%){
	display: block; width: $w; height: $h;
	@content;
	>span{@include hdTxt;}}

//인디케이터 형태 ===========
@mixin indicator_01($ind_class, $myW){
	//하단 인디케이터 형태, focus처리되면 해당 버튼이 길게 늘어나는 형태
	//OPT_01: 인디케이터 버튼 하나의 크기 $myW로 설정
	//OPT_02: class선택자의 이름 설정 $ind_class
	//[기본구조] $ind_clss > ul > li > a 순서
#{$ind_class}{$w:$myW; $f:100%;
 	position: absolute; left: 50%; bottom:$w; transform:translateX(-50%);
 	margin: auto; width:auto; min-width: 135px; 
 	height: $w; padding: 5px; 
 	border-radius: $w; background-color: $wt;
 >ul{width: $f; height: $f;
  >li{float:left; width: auto; height: $w; 
  	margin-left: 5px;  
  &:first-child{margin-left: 0;}
	a{display: block; width: $w; height: $f; border-radius: $w;
		background-color: $gy; transition: all 300ms ease;
	 &:hover{background-color: lighten($pmC,30%);}
	 &:focus{background-color: $pmC; width: ($w * 3); border-radius: $w;
	 	outline: none;}
	  >span{@include hdTxt;}}}}}
}// mixin indicatory_01
```

