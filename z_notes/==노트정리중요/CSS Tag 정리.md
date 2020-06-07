# CSS

띄어쓰기 - 자손
`>` 자식
아무것도 없으면 자기 자신

CSS는 줄바꿈이 자동적으로 안된다. 
view > word wrap > 줄바꿈 (HTML은 자동)

**white space** : 용량 잡아먹는/ 쓸떼없는 스페이스 

단위 1cm => 10mm => (x)px  *임의 단위: endmemo.com

**[최초의 기본설정]**
16px = 12pt = 100% = 1em = 1rem

**CSS 기본**

```css
@charset "UTF-8"
/*파일이름.css*/
```



**CSS 쓰는법**  - 완전히 줄바꿈/풀려쓰는것 

```css
 /*기본: 하나끝날때마다 enter / 줄바꿈 - 줄이 길어진다. */
h1 {
    background-color: #777; 
    color: #fa0;
    }  

  /*끝까지 한줄로 쓰기*/
h2 {background-color: #07f; color: #fff;}
  
/* 같은계열끼리 쓰는것이 좋다. (보기쉽게 / 생략가능) */
```

**기본 태그**

```css
{backgroud-color: ;} 배경색
{color: ;} 글자색
```

**Border**

```css
{border-width: ; border-style: ; border-color: ;}
```



border-syle: solide, dotted(점선), dashed(직선형), // ridge, double;

**A요소**

> 기본적으로 a 요소는 자체 색이 별도로 존재: 파랑색 
> body에다가 color를 할때 a태그는 컬러가 먹지 않는다
> a 요소에다가 color하면 색깔이 따로 먹는다. 
>  **a {inherit;}** 속성값이 inherit이라면, 부모의 속성/값을 따르겠다는 의미

---

#### 선택자 - 전체, type, ID/Class, 자손, 자식

**전체 선택자:** 

*을 이용하여 선택하면 모든 요소를 선택한다.라는 의미
    ex) *{color:#a00;}  
   단 *로 선택하는 것은 사용하지 않는 부분까지 지정하게 되므로, 시스템 성능 저하가 일어나므로, 권장X
   ex) p *{} p안에 있는 모든 속성을 뭘 적용하겠다. 

**type 선택자**: 
	html 문서의 요소(Element/태크)를 직접 선택하는것 
    ex) body{} html{} p{} h1{} div{};

**Attribute 선택자:**
 특정 속성을 갖고 있거나 특정 속성이 특정 값 등을 갖고 있는 요소 선택
[attribute] attribute name속성을 가진 요소를 선택
[attribute="value"] attribute name 속성의 값이 value인 요소 선택 
[attribute~="value"] 여러개의 class 함께 지정되어 있어도 요소가 포함되면 선택 (띄어써있어야함)
[attribute|="value"] 처음에 시작하는 요소가 같으면 선택&하이픈 (-) 구분해서 더  포함해서 선택 (뒤에 있거나 하이픈X선택X)
[attribute^="value"] 처음에 시작하는 요소가 같으면 선택 / 끝에있으면 X
[attrobite$="value"] 끝나는 요소가 같은거 선택 / 처음에 있으면 선택X (특정파일만 선택가능 / .pdf등)
[attribute*="value"] 어떻게 조합되어도 단어가 들어가면 선택

**ID/Class 선택자:**
    id => #
    class => .
    #.을 이용하여 해당 속성의 이름을 선택하여 사용하는 것

**자손(find) 선택자:**
 띄어쓰기로 구분하여 자손을 선택

**자식(children) 선택자:**
특수기호인 >를 이용하여 부모, 자식을 구분 선택;

**nth 선택자:**

> :first-child list 중 첫번째 선택
> :nth-child(숫자) list 중 숫자 선택
> :nth-child(숫자n) list 숫자번째 마다
> :nth-child(숫자n-숫자) 숫자번째마다-숫자
> :nth-child(숫자n+숫자)  숫자번째마다+숫자
> :last-child 마지막 선택 

---

#### 선택자 우선순위

**!important > parents > ID# > .class > type**

(!important > 인라인 스타일 속성 > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자)

우선순위: 먼저 처리하고 나머지는 생략

1. 직접태그(type)보단 class/id 이름이 우선순위 
2. 자식과 자손은 동급
3. 동급인 경우 먼저 쓴 것이 우선순위
4. 복합으로 섞이면 많이 언급한 아이가 우선순위

**! important** = 수정불가 (type, class, id, 부모선택은 수정 가능) / 사용권장X

---

#### Display & Visibility

**display**: 속성은 형태를 변형 처리할때 사용/ 나타냄

> block: 크기를 가지지만, 아래로 쌓인다.
> inline: 크기를 가질수없고 옆으로 나열된다.
> inline block: 크기를 가지고 옆으로 나열, 알수없는 공백이 생긴다. ex) 버튼형태사용
> none: 강제로 사라지게 만드는 기능 (글씨도 사라진다)
> inherit: 부모의 속성값을 상속 받는다.

[해결방법 - float]

**float**: 옆으로 나열하게 만드는기능 / 보임 
-인라인 요소일 경우 float사용하면 강제로 block 요소로 변경 (display: block 생략가능)
***clear**: float기능 해제 / float쓸때사용

> left: 부모의 크기를 기준으로 왼쪽부터 정렬 (ABCD---------)
> right: 부모의 크기를 기준으로 오른쪽부터 정렬 (--------DCBA)
>
> -> 부모에 float:right 주고 그 후 자식에 float:left을 주면된다. (--------ABCD)

**Visibility**: 요소를 보여주거나 안보여줄수있음

>visible: 기본값으로, 요소를 보여줌
>hidden: 요소를 보여주지 않는다. (위치 유지)
>collapse: table 요소들에서만 줄 수 있는 값으로, hidden 비슷 (필요에 따라 공백X테이블 레이아웃 유지)

Layer를 안보이게 하는 방법 

1. display: none - 보이지 않고 해당 공간도 존재하지 않게 됨 / 완전히 사라지게하는것. 
2. visibility: hidden - 보이지만 않고 해당 공간 존재 / 위치유지

---

#### 크기 자동 고정하는방법

1. 부모의 크기를 고정하는 방법
2. 마지막에 필요없는걸 만들어서 Clear고정 - div일경우

**Clear** : float 기능을 해제

> none: 기본 / clear설정X
> left: 왼쪽 해제
> right: 오른쪽해제
> both: 오른쪽 왼쪽 해제

Float취소 (clearfix)하는 방법 4가지

1. float에 float으로 대응: 부모의 크기가 가변적이어야할경우 적용X 
2. float에 overflow속성으로 대응: hidden 내용이 길경우 잘리고 , auto 스크롤바 생김
3. float에 빈 엘리먼트 clear: 의미없는 빈 엘리먼트 사용
4. float을 가상 선택자로 after로 clear하는 방법

-마지막에 clear: float 사용시 하나만 뚝 떨어진다. 
-li 일경우에는 부모에  after/사용 

> after 적용시킬 클래스: .clearfix / .cx로 통일
>
> .clearfix:after,
> .clearfix::after {content:" ", width:0. }
>
> .cx:
> .cx::after {content:" "}

float기능을 사용시 해당 개체는 띄어져서 배치

이에 부모요소는 높이값을 auto로 주었을때, 자식요소의 높이을 반영하지 못하고 0이 된다. 

```css
.clearfix:after,
.clearfix::after{content:" "; 
	width:0; height:0;
	display: block; clear:both;}
```

content " " (스페이스 빈공간 필수:opera버그)

:: 표준(exploreX)  : 예전버전

.clearfix:after



---

#### overflow : 글자 넘칠때 텍스트 처리방법

overflow: 지정된 크기를 기준으로 내부의 영역이 넘친다면, 어떻게 처리할것인가를 판단

> hidden: 넘칠때 숨기는 기능 / 숨긴것이 안보임
> visible: 기본형 / 넘칠때 보이게 만드는 기능
> auto: 넘치면 스크롤 생기고, 없으면 안생긴다.
> scroll: 안넘처도 아래&오른쪽에 스크롤 생김
>
> overflow:auto, overflow-x: x축만 보이게할수있고 안보이게 할수있다.
> overflow:auto, overflow-y: y 축만 보이게 할수있고 안보이게 할수있다.

[스크롤바 없애기]
부모에 overflow:block한 후 안에 span -> display: block, overflow: hidden, overflow-y: auto; padding: right: 20px 

```css
.over{width:80%; min-width: 500px; height: auto; background-color: #0df; padding: 1rem; box-sizing: border-box; }
.over>p{margin: auto; margin-bottom: 400px; width: 450px; height: 200px; border-width: 2px; border-style: solid; border-color: #fa0;}
.one{overflow:scroll;}
.two{overflow: hidden;}
.three{overflow: auto;}
.four{overflow:auto; overflow-x:hidden;}
/* 스크롤바 없애기 */
.five{overflow: hidden; }
.five>span{ display: block; overflow: hidden; overflow-y: auto; width:100%; height: 100%;background-color: #fff}
.six{overflow: hidden; }
.six>span{padding-left: 10px; padding-right: 20px; display: block; overflow: hidden; overflow-y: auto; width:100%; height: 100%;background-color: #fff}
/*  기사 넘치면... 
글자넘칠때 텍스트 처리방법 */
.over > .seven {height: 30px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
```

[글자 넘칠때 텍스트 ...만들기]

**white-space**: 임의 공백이 아닌, 의도하지 않은 공백을 처리하는 방법

> pre: 실제 코드에서 작성한 형태대로 공백을 주어라 (pre태그같은 속성)
> nowrap: 여백을 모두 삭제 / 의미없는 공백을 한줄로 처리해라
> pre-line: 실제 코드에서 작성한 줄바꿈 처리와 동일하게 해라
> unset: 기본 / 크기에 맞게 줄바꿈 처리

**text-overflow:** overflow와 유사하지만, 넘치는 영역이 글자일 경우에 처리방법 , 대체로 overflow 함께 사용
-영역을 벗어난 텍스트 부분을 자를 수도 있으면 생략부호(...) 사용가능

>ellipsis: 넘칠경우 말줄임표(...)를 처리
>unset: 기본형으로 처리 

**white-space**

> nowrap : 없애기
> unset: 기본형

```css
.over > .seven {height: 60px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
```

**word-break**
\- 길이가 긴 단어를 나누어 표현해야 할 때 단어가 나뉘는 기준을 설정
\- break-all | keep-all: 단어를 문자별로 나눌 수도 있으며, 하이픈(-)을 기준으로 가능
\- 영문자로 구성된 단어만 적용 / 한글은 자동으로 속성값: break-all

---

#### Margin, Padding, Border , Outline 이해하기

**Margin**(이윤, 이득)

-여백을 주어 공간을 만드는것, 공간의 투명한 영역
\-Object와 화면과의 여백(**외부여백**)
-해당 컨텐츠의 바깥과의 간격 조정
\-배경색의 영향X
\-margin 속성값을 auto로 설정하면, 웹 브라우저가 수평 방향 마진값을 자동 설정

>{margin : 위 오른쪽 아래 왼쪽 / 시계방향} 4개 : 위, 우, 아래, 좌 (시계방향);
>{margin : 위 | 좌우 | 아래;} 3개 : 위, 좌우, 아래;
>{margin : 위아래 | 좌우 ;} 2개 : 위아래, 좌우;
>{margin : 전체 ;} - 1개 : 위, 우, 아래, 좌 모두 적용;
>*2개이상 사용할경우 띄어쓰기로 구분하여 사용 
>auto: 위아래:0 좌우: 균등하게 맞추어라 (가운데정렬);
>	*단 auto 경우시 float 기능과 함께 사용하면 가운데 오질 않는다. (float 모드로 움직임) 

**가로일때(float사용시):**
-float은 크기가 더해짐 / 위(부모)의 사이에 떠짐 

**세로일때(float과 같이 안쓸때):**
-위(부모)와 같이 떠진다. / 부모를 데리고 내려온다 (그래서 버그마진효과)
-float이 없을경우는 같이 마진 부분이 있을경우 큰값이 먹힘
*margin collapsing (마진 겹친형상) :두개의 마진값중에서 큰값이 마진값/부모 엘레멘트하고도 같은 원리 

{margin-top: 20px; margin-bottom: 20px; margin-left: 20px; margin-right: 50px;}
{margin: 20px 50px 20px 20px;}
**정답**: margin: 20px; margin-right: 50px; (순서 바뀌면 안됨; 바뀌면 margin 값이 먹힘)}

**Padding** (두툼한 옷)
-크기는 유지, 본질은 변하지 않지만 뭔가 붙는다.
-background-color 속성으로 설정하는 배경색 영향 / 부모색깔
-자기자신이 늘어나는것처럼 보인다 (안쪽여백)
-(margin)글씨 위치 동일 / 같은 세팅 
-Padding에는 auto가 없다.
-Object내의 **내부여백**
\- 해당 컨텐츠 내의 간격을 조장

**Border**

-옵션의 두께만큼 박스의 전체 크기도 늘어나게 한다.
\-border-style (모양 설정) |border-width (너비) | border-color (색상) | border-top/bottom/left/right (상하좌우 부분 속성) 
-padding과 유사하지만 색깔 변경이 가능하다.
{border-width: 5px; border-style: solid; border-color: #061;}
축약형 : {border:5px dotted #faf;} - 줄여서 사용, 순서상관X

box-sizing: border-box - 패딩을 높여도 크기X, 안으로 생김 / 박스 크기를 border-box로 처리해라
box-sizing: content-box - 기본 / 패딩할경우 크기 커짐

***option**

.option {margin: 50px; width: 200px;height: 200px; 
	background-color: #ccc;
	padding: 25px; border: 25px solid #ccc;}
가장 끝에 있는것이 border이다. 

**Outline**

outline-offset = exploreX
-허공에 떠다니는 안개 / 다른아이의 영향을 미치지 않는다.
-a 태그 focus잡혔을때 표시할때 사용 (밀림없이 처리)
\-가장 바깥 부분을 둘러싸고 있는 아웃라인 부분의 스타일을 설정
\-박스의 크기를 늘리는 게 아니라 테두리만 생기는 것뿐
\-style 속성: dotted(점선) | dashed(긴 점선) | solid(실선) | double(이중실선) | groove(3차원 입체적인선) | ridge(3차원 능선효과있는 선) | inset(3차원 내지로 끼운 선) | outset(3차원인 외지로 끼운선) | none(없앰) | hidden(존재하는데 숨김) 
\-outline-style(모양설정) | outline-width(너비설정) | outline-color(색상설정) | outline-offset(테두리:border와 아웃라인:outline사이 여백 설정
\-단점: IE7이하 지원X / 상하좌우 모두 테두리에 적용

---

#### pseudo code: 의사전달 코드/가상선택자

-하나의 언어/ 의식의 흐름에 따라 전달 /형체가없다
-hover, active, focus, visited

​	**focus**: tab을 눌럿을때 상자 나올때
​	focus 처리되는 기능: a, button, input, select, teatarea;

a 마우스 올릴때 a{} => <a href “”> < /a>

**a:hover{}** - 마우스 올릴때 (정식명칙: roll over) 
**a:active {}** - 누르고 있을때
**a:focus{}** - 초점이 잡혔을때 (a / button / form)
**a:visited{}** - 방문한적이 있을때

​	span:focus{background-color: #000;}  => 안먹는다 (focus처리되는 기능 안에 안들어 있어서)
​	a:focus >span{background-color: #000;} =>먹는다 (a태그가 잇어서)

	focus/active = 동급 / 쓰는 우선순위 

```css
span{background-color: #ddd;}
span:hover{background-color: #f00;}
a:focus >span {outline-width:5px; outline-style:solid; outline-color: #000;}
a:active > span {background-color: #00f;}
/*outline:5px solid #000; 축약형*/
a:visited >span {color: #fff;}
/*a:focus{background-color: #000;}*/
```

**가상선택자** 

> 가상 클래스: 아무런 class를 부여하지 않았지만 역동적으로 class를 변경한것과 같은 효과를 낼수있는것들로서 이미 존재하는 엘리먼트에 조합해서 사용가능  (ex:link, visitied, hover, active, focus, first-child)
>
> 가상엘리먼트: 존재하지 않는 엘리먼트를 가상으로 생성해내는 선택자 (ex: first-line, first-letter, before, after)

before,after = HTML문서상에 존재하지 않는 콘텐츠 출력

더 알아보기

```css
p{margin: 100px auto; width: 500px; height: 100px;
	text-align: center; line-height: 100px;
	border-width: 3px; border-style: solid; border-color: #777}

	p:before{content:"어떻게될까요?"; color:#f00; font-weight: bold;}
	p:after{content:"어디에 있을까요"; color:#00f; font-weight: bold;}

	/*회원가입시 필수항목 *옆에 적을때 사용 */
```

---

#### Reset CSS

**RESET CSS** 세팅(CSS) 초기화 
-모든 브라우저는 각각의 브라우저 마다 해당하는 요소의 기본값이 조금씩 다르다.
그렇기에 원하는 형태로 제작하기 위한 css를 처리하기 위해 기본 세팅을 주어야한다.

[Eric Meyer`s Reset CSS 2.0](https://cssreset.com/scripts/eric-meyer-reset-css/) - 에릭 마이어 CSS Reset 만든분 (Eric Meyer)
[다룸 Reset CSS](http://darum.daum.net/convention/css/css_convention) - 다음개발자
[Github Normalize.CSS](https://necolas.github.io/normalize.css/8.0.1/normalize.css) - necolas.github.io/normalize.css

**Common CSS**: 기본 CSS
-공통의 자주 사용하는 기능을 요약하여 별도의 파일로 만들어서 사용하는 기능

**Normalize CSS**: 일반적인 CSS
-Reset CSS + Common CSS



```
@charset "UTF-8";
/* .css */

/* RESET CSS ======================== */
html, body, h1, h2, h3, h4, h5, h6, 
ul, ol, li, dl, dt, dd {margin:0; padding: 0; border:0;}
ul, li, ol {list-style: none}

/* COMMON CSS*/
.clearfix:after,
.clearfix::after {content:" "; display: block; clear: both;
	width: 0; height: 0;}

/* LAYOUT DESIGN =========================== */

```



---

position : 열기구 스토리

position 기능은 최후의 보루! (처음부터 사용시: 수정힘듬)
			무조건 position을 배제하는것X > 써야하는 상황은 써라! (접근성 고려해라)

> static : 기본상태 / 아무것도 안한상태 (float) / position에서 쓸수있는것이 없다.(z-index, top,left, right, bottom 사용X)
> absolute : 마음대로 돌아다니지만 조건이 있는 아이 / 제한 있음 / 누군가를 따라다니는것 /  기준/끈 : realtive/fixed
> relative : 기준이 되는 곳
> fixed : 제한없이 날아다니는 형태 / 자기멋대로 아무대나 갈수있음 
> *sticky

z- index +/-  (index: 순서) 가까울수록 수치가 높아진다. 0밑으로 떨어지면 건드릴수가 없다(투명막).
	기본상태/static은 사용못한다.

위치 (top, left, right, bottom)



position sticky mdn

css-tricks / mozila



```
<script>
    검증 확인하고 체크할때 
  document.write("첫번째 체크사항");
    -기존데이타 삭제
  alert("두번째 체크사항")
    -팝업창
  console.log("세번째 체크사항")
    -개발자 f12
  </script>

target="_self" 현재 
  target="_blank" 새창

${3:#wrap>header#headBox>h1>a{제목}^^main#contentBox>h2{부제}^footer#footBox>h2{정보}}

```

---

191010 transform