

# JS 기초 이해하기

#### JavaScript란?

자바스크립트란, 객체기반의 스크립트 프로그래밍 언어
주로 웹에 특화되어 있는 프로그램언어이다.
과거, 자바의 아류이자 초급언어, 저급한 언어라는 칭호를 들은적이 있지만, 
현재 (2019년)는 가장 인기있는 언어 중의 하나

객체기반, 객체/함수지향, 일급객체로 불리오는 언어이며,
과거 웹에서 HTML, CSS만 제어하던 시절을 넘어서 현재앱을 제작하기도 하며,
서버를 컨트롤 하기도 하는 다양한 분야에서 쓰이는 언어

자바스크립트는 ECMA SCRIPT를 표준언어 체계를 따르고 있으며,
ECMA표준은 매년 6월 17일에 새로운 표준을 선언하고 있음

유사언어는 **Type Script, Dart, Elm,** Coffee Script(MS만듬,X), Action Script(플래쉬,X) 등이 있다.

자바스크립트에서 인기있는 **라이브러리, 프레임워크**
jQuery, Angular JS, ReactJs, VueJS, Handlebar JS, ember, polymer, d3JS...

#### 책추천 (저자: 일본..하하하)

1. 누구나 쉽게 배우는 자바스크립트 *
2. 자바스크립트 마스터북 **
3. 자바스크립트 완벽 가이드(노랑) *** 
4. 인사이드 자바스크립트 (쏘쏘)

#### Script 작성위치

1. head 내부에 css 뒤에 작성하는 것을 권장 *브라우저 속도가 떨어짐
2. script작성위치2: body 내부 어디든 작성가능 *권장하는 위치는 아니다.
3. body내부 마지막 위치 *권장하는 위치
4. 외부문서로 불러오기 *script내부안에 내용작성X / 따로  script태그 만든후 작성

```javascript
주석
// ctrl / 한줄 
/*ctrl +shift 
   여러줄 주석 */

줄바꿈 \n
```

#### javascript 주의사항

-나중에 한줄짜리로 바꾸면 ; 없을경우 에러가 생겨서 꼭 써야한다.

-자바스크립트 문자세팅 : 'use strict'; 

-변수&함수호출 끝에 ;(세미콜론) 사용 
-함수끝은 ;안사용해도됨!

#### javascript에서는 검증이라는 기능이 존재

  검증은 어떠한 과정을 중간에 확인하는 기능 

1. document.write()  => 브라우저에 내용을 입력해서 확인
(html코드가 사라질수있음)
2. alert() => 메세지창을 띄어서 확인 
(매번 확인을 눌러줘야한다. / 첫번째창)
3. console.log() =>개발자 모드에서 확인
(console탭메뉴에서 확인가능)
(찾기힘들다.?/주로 여기서 사용함!!)

```html
<!-- 검증기능 테스트해보기 =============-->
<script>
	document.write("브라우저 내부, body에 내용 작성확인");
	alert("메세지창에서 결과물 확인");
	console.log("console창에서 결과 확인");
</script>
```

#### 자료형 자료

```javascript
//base_02.js

console.log("base_02.js연결완료");

console.log(10+10-5); //20: 숫자+숫자: 숫자
//10 파랑: 숫자
console.log("10+10"); //10+10
//10 검정: 문자 "사이에 적기"
console.log("10"+10); //1010 문자+숫자:문자 = 나열
console.log("10"+"10"); //1010 문자+문자:문자 = 나열 

//js에서는 다양한 형 타입이 존재
// 숫자는 따옴표를 붙이지 않는다.
// 문자는 따옴표를 붙인다"" 
//(js는 쌍따음표, 홑따옴표 구분을 하지 않는다.)
//단, 따옴표의 시작과 끝이 모양이 같아야함. ''(O) ""(0) '"(X)
//`` 빽팁도 사용하는데 의미가 다르다 (~)

//따옴표를 사용하지 않는 문자가 있다.. 
//-> 변수, 함수, 객체, 배열 등의 ... 기능을 가진 이

var 낄끼빠빠 = "낄때 끼고 빠질때 빠져라";
// var는 낄끼빠빠를 등록하겠다. (변수만들기)
console.log(낄끼빠빠); //뒤에 내용이 나온다. (변수)

var coffee = "인생의 쓴맛, 이걸 왜 먹지";
console.log(coffee);
	coffee ="사치, 오늘하루도 무사히 이룰수있게";
console.log(coffee);

// 변수: 
//1.변하는 수라는 뜻을 가지고 있으며, 하나의 기능 또는
//   내용을 요약해서 담고 있는 형태
//2.상황에 따라 그 내용이 변할 수 있으며, 
//  어떠한 기능을 담을 수있다.
//3.(조건)단, js외 다른 언어에서는 변수에 기능을 담을 수 없다.
//4. 변하지 않는 수에 대해서는 상수(최초의 등록이 값만 인지)라고 불린다.
// 상수는 최초의 한번만 등록가능 (숫자/문자 가능)
//5. 변수는 최초에 한번 var라고 선언한다.
//  이후에는 동일한 변수를 수정시 var를 적지 않는다. 
//6. 2015년 이후, ECMA2015(es6) 버전이 등장하면서, 
//  var변수 대신 const, let을 이용한 변수가 등장. (수익부트?)

//";" 작성하는 곳: ";" 의 의미는 기능 종료를 뜻함.
//기능종료는 일부분 종료가 아닌 해당 라인 전체의 기능 종료 

//주로 변수 선언 후 마지막 작성, 
//예) var coffee="coffee 맛";
//합수 또는 메소드 기능 마지막 작성 
//예) log();   / setInterval().log();

// 자바스크립 === 같다   
// = 개입하다. 
// ==
// 정확하게 사용하기위해서 나옴
// (10 == "10") 그냥 값이 같다. (문자 숫자 상관없음)
//==타입과 상관없이 비교 (동등 연산자/equal operator)
//피연산자가 서로 다른 타입이면 타입을 강제로 변환하여 비교
// (10 === "10") 값은 같지만 형태는 다르다.
//===타입까지 비교 (일치 연산자/strict equal operator)

```



---

191004

### 변수

```javascript
 // 다른 결과가 나온다. ("문자값"/변수값)
var int1 = "";
 console.log("int1"); //int1 (문자)

var int1 = "";
 console.log(int1); //공백 (변수값이 없어서 공백)

 var int2;
 console.log(int2); //undefined (변수명을 선언했지만 값이 지정하지 않은 형태/정의를 내지 않은것)

 console.log(int3); //not defind (변수를 생성조차 하지 않은것 / 에러)

//스크립트 기반 또는 언어라고 불리우는 프로그래밍은 하나의 에러가 나면 이후의 내용은 동작하지 않는다.
//에러 밑으로는 결과가 나오지 않는다. 
```

#### 변수 (var / let / cont)

**var**: 오래전 부터 사용하던 변수
 *호이스트 현상이 생김: 호출하기 이전에도 해당하는 변수가 존재하는 것처럼 인지
**let**: ECMA2015 (es6) 버전부터 생성된 변수
 *호이스트 현상이 생기지 않는다. (현재 많이 사용하는 변수)
**const**: ECMA2015 (es6) 버전부터 생성된 변수
 *호이스트 현상이 생기지 않는다.
 *변수로 불리지만 한번 지정 후에는 값을 변경할 수 없는 변수 (상수)

```javascript
// =================================
var rel1;
console.log(rel1);
rel1 = "10시 40분"; //undefined 정의를 내지 않은것

console.log(rel2);
var rel2 = "10시 40분" //undefined (호이스트현상:HOIST)
//원래라면 not defind(error)가 나와야하지만 호스트현상으로 undefined로 나옴
//호이스트현상: var을 통해 정의된 변수의 선언문을 유효 범위의 최상단으로 끌어올리는 행위

// =================================
let rel3 ="";
console.log(rel3);  //값이 나옴

let rel4;
console.log(rel4); //undefined 정의를 내지 않은것

console.log(rel5);
let rel5 = "10시 40분"; // error (cannot access before initialization) *호이스트 현상X

let rel6;
console.log(rel5);
let rel6 = "10시 40분"; // error (already been declared)
// let은 또 쓰면 안된다. 

let rel7;
console.log(rel7);
rel7 = "10시 40분"; 
console.log(rel7); // 변한 값이 나옴

// =================================
const rel8
console.log (re8) // error (missing initializer)
//처음에 선언할때 무조건 값을 선언해야한다.

const rel9 = "";
console.log (rel9) //값이 나옴 

const rel9 = "변해라";
console.log (rel9) //값이 변하지 않는다. error는 안생김
//const값을 변경할수없다. 

```

변수 사용하는 예제

```javascript
var card = 1000;
var chu = 500;
card = card - chu
console.log (card) 
card +=5000; //card = card +5000;
console.log (card)
card -= 13000; // card = card - 13000;
 console.log (card)

//if문
 if (card<0) {
	console.log ('잔액이부족입니다.')
}else{
	console.log(card);
}

//[삼항연산자 방법] 조건 ? 조건이 참일경우 : 조건이 거짓일경우;
(card<0) ? console.log ('잔액이부족입니다.') : console.log(card)
```

#### 변수 요점정리

-var (오래도록 사용한 변수, hoist 현상문제)
-let (hoist 현상을 막기위해 생성된 변수)
-const (최초에 생성후에 변경이 불가능하도록 처리된 변수-상수의 개념을 가짐)

```javascript
console.log (myVar);
var myVar = 0; //undefined

var myVar;
console.log(myVar);
myVar = 0; //0
```

### 사칙연산

+,-,*,/,%
+=, -=, *=, /=
++, --
==, ===, !=, !==
<, >

**리터럴**(**literal**): 연산자를 해서 나온값 / 소스 코드의 고정된 값을 대표하는 용어
**오퍼런트**/**피연산자** : 숫자 (피연산자 영어: operand)
**연산자**: 변수나 값의 연산을 위해 사용되는 부호 +-*/ (연산자 영어: operator)
var 리터털 = 오퍼레이터 연산자 오퍼레이터

#### 기본 연산자 (+,-,*,/,%)

```javascript
//int = int(정수)

var int;
int = 10;
console.log(int);

// int + 10;
// console.log(int); //10이 나옴 
//int+10을 어디에다가 넣을건지 적지않아서 +10한 값이  나오지 않음

// var rel = int + 10;
//int = int + 10; // rel=int 같은뜻
// console.log(rel);
//int+10을 어디에다가 넣을건지 적지않아서 +10한 값이  나오지 않음

 int = int + 10; //20
 int = int - 5; //15
 int = int * 4; //60
 int = int / 10; //6

 int = int % 4; //2 
 //몫을 뽑아내는것이 아니라 나머지값을 도출한다.
console.log(int);

var int2 = 10;
int2 = int2 / 3
console.log(int2); //3.33333
int2 = int2 % 3;
console.log(int2); //0.33333

var int3 = 11;
int3 = int3 % 2;
console.log(int3); // 사용예시0/1 짝수냐 홀수냐 할때 / 일주일 알람

(int3 == 0)? console.log ("짝수"):console.log("홀수"); //홀수
```

```javascript
날짜나오게하는 방법
var now = new Date()
console.log(now);
```

#### 복합 대입 연산자(+=, -=, *=, /=, %=)

```javascript
var int;
int = 10;
console.log(int);
 int += 10; //20
 int -= 5; //15
 int *= 4; //60
 int /= 10; //6
console.log(int);

복합 대입 연산자: 너무 길고 불편해서 간단하게 만든것이다.

var i = 100;
i = i +2019;
console.log(i);
i += 2019;
console.log(i);

var now_year_month_date = 20191014;
now_year_month_date = now_year_month_date + 1;
console.log(now_year_month_date);
now_year_month_date -= 1;
console.log(now_year_month_date);
```

연산자 요점정리

```javascript
console.log ('연산===========');
/*연산자: operator*/
var i = 10 + 2; //12
i -= 6; //i - 6; //6
i *= 2; //i * 2; //12
i /= 4; //i / 4; //3
i /= 2; //i / 2; //1.5
i *= 2; //i * 2; //3
i %= 2; //i % 2; //1
i += 2; //i + 2; //3

console.log(i);
```



#### 증감연산자

증감연산자 : 1씩 더하거나, 빼는 기능
1씩 더하거나(++), 뺄때(--) 앞(전치연산자) 또는 뒤(후치연산자)에 붙일 수있다.
전치연산자(앞): 먼저 연산후 결과를 확인(도출)
후치연산자(뒤): 먼저 결과를 도출후 연산

```javascript
var now = 100;
now +=1;
now +=1;
now +=1;
now +=1;
console.log (now)

var now2 = 100;
now2++;
now2++;
now2++;
now2++;
console.log (now2)
//1씩 증가한다. / 띄어쓰기X / 후치연산자(뒤)

var now3 = 100;
now3 -=1;
now3 -=1;
now3 -=1;
console.log (now3)

var now4 = 100;
now4--;
now4--;
now4--;
console.log (now4)
//1씩 뺀다./ 띄어쓰기X / 후치연산자(뒤)

var now5 = 100;
++now5;
++now5;
++now5;
console.log (now5) //전치연산자(앞)

var now6 = 100;
--now6;
--now6;
--now6;
console.log (now6) //전치연산자(앞)
```

```javascript
//전치연산자(앞): 먼저 연산후 결과를 확인(도출)
//*후치연산자(뒤): 먼저 결과를 도출후 연산
var myi = 100;
console.log(myi)
console.log(++myi) // 결과가 바로 나옴
console.log(++myi)
console.log(--myi)
console.log(--myi)
console.log("결과1",myi)
console.log(myi++) // 결과가 바로 안나옴
console.log("결과2",myi) //더해졌음 
console.log(myi++) // 결과가 바로 안나옴
console.log(myi++) // 전거결과가 나옴
console.log("결과3",myi)
console.log(--myi)
console.log(--myi)
console.log("결과4",myi)
console.log(++myi)
console.log(myi++)
console.log(myi--)
console.log(myi++)
console.log("결과5",myi)
```

증감연산자

```javascript
var n = 10;
++n; //11 - 1을 더하다
++n; //12
n++; //13 = 앞에 있는 값을 도출 but 실제값은 +1 
n+=1; //14
console.log(++n); //15
console.log(n++); //15 앞에 있는 값을 도출 but 실제값은 +1 
console.log(n); //16

//+- 둘다 가능하다.

[예제]
for(var i=0; i<10 ; i++){
	console.log(i);
}
// 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9

```



업그레이드 문자+숫자 / 숫자+문자

```javascript
var ls = 77;
var tx = "번가의 기적";
var myMv = "77번가의 기적"; //다 문자로 나옴 (77을 숫자X)
// var myMv = 77 "번가의 기적"; //error
var myMv = 77 + "번가의 기적"; //숫자+문자 = "+"나열한다라는 의미 
var myMv = ls + tx; 
console.log(myMv)
console.log(ls+tx)

ls = 05; //숫자는 1부터 시작 앞에 0사용해도 안나옴
tx = "번가";
myMv = ls+tx;
console.log(myMv);

ls = 4; //0을 문자로 만든 후 기능을 만든다.
(ls<10)? myMv = "0" + ls + tx : myMv = ls + tx;
console.log(myMv);

var myMv = "77.11번가의 기적"; //다 문자로 나옴 (77을 숫자X)
var myN = parseInt(myMv); //값(77) 문자를 숫자로 인식해라
console.log(myN); //77
// parse :변환할때 사용 
//parseInt : 정수로 변환하겟다.
var myMv = "77.11번가의 기적"; //다 문자로 나옴 (77.11을 숫자X)
var myN = parseFloat(myMv); //값(77.11) 문자를 숫자(소수점까지) 인식해라
console.log(myN); //77.11
//parseFloat: 소수점까지 인지
```

### **parseFloat**( **string** )

parseFloat()는 문자열을 실수로 바꾸는 함수입니다.

-수로 시작할 때 그 수를 실수로 바꿉니다.
-띄어 쓰기로 여러 개의 수가 있으면 첫번째 수만 바꿉니다.
-공백으로 시작하면 공백은 무시합니다.
-수가 아닌 문자로 시작하면 NaN을 반환합니다.

### **parseInt**( **string**, n )

parseInt() - 문자열을 정수로 바꾸는 함수입니다.

-string을 n진법일 때의 값으로 바꿉니다. n은 옵션으로 2부터 36까지 입력할 수 있습니다. 입력하지 않으면 10으로 처리합니다.
-string의 처리는 parseFloat()와 거의 같습니다.
-소수 부분은 버립니다.
-0x로 시작하면 16진법으로 처리합니다.

---

### 자료형 파악하기

**typeof** : 문자인지 숫자인지 알려주는 함수

```javascript
//검은색: 문자
//파랑색: 숫자
//숫자랑 문자가 같이 나올경우는 문자에 ""넣어서 나옴

//typeof : 문자인지 숫자인지 알려주는 함수
var i = 0;
var myType = typeof(i);
console.log(i, myType); // 0 "number"

var s = "0";
var myType2 = typeof(s);
console.log(s,myType2); //0 string

var is = i+s;
var myT3 = typeof(is);
console.log(myT3); //string
// 숫자 + 문자 = 문자

let n;
let myT4 = typeof(n);
console.log(n); //undefined

var d = null; //지웠다가 다시할때
var myT5 = typeof(d);
console.log(myT5); //object

var e = undefined; //처음부터 없을때
var myT6 = typeof(e);
console.log(myT6); //undefined

let bool = !true; //논리형
console.log(bool) //!false !!true
let myT7 = typeof(bool);
console.log(myT7) //boolean
```

#### 자료형 요점정리

```javascript
/*숫자( 0 ), 문자 ("0")*/

var num = 100;
console.log ( typeof(num) ); //number
var str = "100";
console.log ( typeof(str) ); //string

var num = 100;
console.log ( typeof("num") ); //string "문자를 하는거임"

console.log ( typeof(123) ); //number
console.log ( typeof("123") ); //string

//참 (true)/거짓(false)
var bool = false;
console.log (typeof(bool)); //boolean

/*null/undefined*/
var myrel = 123;
myrel = null; //초기화하겠다. -> 개념바뀜
console.log (typeof(myrel)); //object

var myRel;
console.log (typeof(myRel)); //undefined
```

#### 배열&객체

**배열이해하기**
배열이란 목록의 나열이라는 의미를 가지고 있는 형식으로,
이는 다양한 내용 및 변수 또는 함수를 나열하는 방식
**객체이해하기**
객체란 배열과 유사하면 나열의 의미는 같으나, 정의와 설명이 첨부된 형식
객체의 정의를 설명값이 함수로 처리되면 메소드라고 불리며, 
단순설명으로 처리되면 프로퍼티파고불리기도 함

```
배열이해하기
배열이란 목록의 나열이라는 의미를 가지고 있는 형식으로,
이는 다양한 내용 및 변수 또는 함수를 나열하는 방식
javascript: 첫번째 (0)으로 시작

<배열 HTML예시>커피의 종류

<ul>
<li>아메리카노</li>
<li>프라푸치노</li>
</ul>
<!-- ====================================================== -->
객체이해하기
객체란 배열과 유사하면 나열의 의미는 같으나, 정의와 설명이 첨부된 형식
객체의 정의를 설명값이 함수로 처리되면 메소드라고 불리며, 단순설명으로 처리되면 불리기도함

<객체 HTML예시>음료의 종류

<dl>
<dt>커피</dt>
<dd>커피원두를 주원료로한 음료</dd>
<dt>과일쥬스</dt>
<dd>과일이 들어간 음료</dd>
</dl>
```

javascript에서는 배열과 객체 모두 형타입을 object

```javascript
//배열형식이나 객체형식으로 썻을때 typeof: object이다.

var arr = []; //배열형식
var arrT = typeof(arr);
console.log(arrT); //object

var obj = {}; //객체형식
var objT = typeof(obj);
console.log(objT); //objct

//=== 쓰는 방식

//배열(arr): 나열/ 목록형식 (html:li)
var arr = ['samsung','lg','apple']; //배열형식
var arrT = typeof(arr);
console.log(arr[0]); //samsung
//해설: 0:samsung, 1:lg, 2:apple

//객체: 속성형식
var obj = {'samsung':'gallaxy',
			'lg':'v50s',
			'apple':'iphon'
			}; //객체형식
var objT = typeof(obj);
console.log(obj['samsung']); //gallaxy

```

#### 배열

```javascript
//옛날 방식
var arr = new Array;
var myArr =

//지금방식
// var arr =[];
var arr =[1,2,3]; //숫자
var arr =['a','b',]; //문자
var a = "apple"
var arr =[a]; //변수
var arr= [1,"a",a] //혼합 
console.log(arr); (3)[1, "a", "apple"]

var fruits = ['durian', 'mango', 'starfruit'];
console.log(fruits);
console.log(fruits[0]);
//javascript: 첫번째(0)
//css: 첫번째(1)

var drink = [['coffee','americano'],
			 ['fruit juice','apple juice'],
			 ['tea','fruit tea']];
//이차배열: 배열안에 배열이 또 들어있다.
console.log(drink) // (3) [Array(2), Array(2), Array(2)]
console.log(drink[0]) //(2) ["coffee", "americano"]
console.log(drink[0][0]) //"coffee"
console.log(drink[2][1]) //"fruit tea"

//풀어서 쓴다면
var mydrink = drink[0];
console.log(mydrink[0])

console.log(drink[0][0])
```

#### 객체

```javascript
var obj1 = {"property":"value", "p":"v", "속성":"값"};
console.log(obj1);
//배열처럼 순서가 정해진것이 아니댜!!!!!! 
var obj = {"Korea":"이순신", "USA":"캡틴아메리카", "India":"간디"};
console.log(obj); //{Korea: "이순신", USA: "캡틴아메리카", India: "간디"}
//객체 사용하는 2가지 방법 (대괄호/.)
console.log(obj['Korea']); //대괄호
console.log(obj.USA); //.(""X)

window.location ="?";
var window ={location:"?"};
```

배열&객체 요점정리

```javascript
/* array([]), object({})       object({" ":" "}) */
var arr = [1,2,3];
console.log(typeof(arr)); //object

console.log(arr[2]); //3 = 배열&객체 같은형식

var obj = {"a":"pen", "b":"mouse"} //a&b ""X ->다른거때문에 하는것이 좋음
console.log(typeof(obj)); //object

console.log(obj["b"]); //mouse = 배열&객체 같은형식 (한글,띄어쓰기,특수기호)
console.log(obj.b);//mouse = 배열 다른방법 (자주사용)


var reset = null;
console.log(typeof(reset));//null
요점정리 ============================
    var arr = ['apple','banana','graph'];
	arr[1]

	var obj = {'sam':'ga','app':'ipon'};
	obj.app
```

객체&배열 업그레이드

```javascript
var arr = [1,2,3];
var obj = {"a":"pen", "b":"mouse"} 
var reset = null;

console.log(arr);
console.log(arr.__proto__);
console.log(arr.constructor);
console.log(arr.constructor.name);

console.log(obj);
console.log(obj.__proto__);
console.log(obj.constructor);
console.log(obj.constructor.name);

console.log(reset.constructor.name); //cannot read property
```

---

191008 - 요점정리 & 함수 & 문법

### 함수

함수란? 하나 또는 여러기능을 하나의 역할을 하도록 만든 묶음

**함수기본형태**: function () {}

```javascript
//함수에 대해 => function () {}

function 함수이름(a) {  //(a) 매개변수 / 자판기 동전 / parameter
	return a * 100;
}
//매개변수: 
```

기본문법 예제

```javascript
function myCoffee(a) {
	return a * 100;
}

var rel_1 = myCoffee(100);
console.log (rel_1); //10000
var rel_2 = myCoffee(2);
console.log (rel_2); //200
```

#### parameter (매개변수) 

함수의 정의 부분에 나열되어 있는 변수, 여기서는 plus 함수 정의시에 사용되는 a, b를 parameter(매개변수) 라고 한다.

```javascript
def plus(a, b):
  return a + b
```

#### RETURN

결과값을 얻어낼려면 return을 사용해야한다.

1. 값을 반환하는데 사용한다.
2. 지역변수를 알 수 있는데 사용할 수 있다.
3. 현재 진행중인 함수를 중지(탈출)할 수 있다.

```javascript
function myCoffee(a) {
	var b = a * 100
	return b;
}
//리턴후에는 사용할수없다. 
```

//console 창에 test ()를 쓰고 enter하면 먹는다!!!

```javascript
function test(){
	var web = document.getElementsByTagName('body')[0];
	web.style.backgroundColor="#fa0";
}
//브라우저에 있는 body라는 태그를 가져와서 입력해라

//console 창에 test ()를 쓰고 enter하면 먹는다!!!
test(); //아니면 sublime에다가 거기에..,, 적으면 먹음
```

```javascript
function test(color){
	var web = document.getElementsByTagName('body')[0];
	return web.style.backgroundColor="#"+color;
}
//console ==============
test()
"#undefined"
test(123)
"#123"
test("12f")
"#12f"
test("123"); //아니면 sublime에다가 거기에..,, 적으면 먹음

/*
사용하지마라~
1. CSS에다가 important
2. html 스타일태그를 직접입력
예) <body style="background-color: #777;">
*/
```

#### 함수도 호이스트 현상이 생긴다!!!!

```html
t2();
function t2(){
	return console.log('t2 실행')
}
```

### 함수종류

선언식, 표현식
익명함수, 즉시실행함수(IIFE), (화살표 함수:ES6)
= 복잡한 수식을 하나의 묶음으로 처리해서, 간단하게 호출함으로 결과를 바로 얻을 수 있게 처리하는 방법

**함수 선언식:** 함수에 이름을 붙여서 사용하는것 
function t2(){}
//함수이름(값입력)

```javascript
t2();
function t2(){
	return console.log('t2 실행')
} 
//t2 함수이름
```

**함수표현식:** 변수에 함수(익명함수: 이름이 없는 함수)를 대입하여 사용하는것 (더 많이 사용)
var t3 = function (){} 
//변수이름(값입력)

```java
var variableFn = function(n){
	return (n + 100) * 10;
}
var v =variableFn(7);
console.log(v); //1070

//먼저 호출(var)하면 안된다. =>error
```

#### 즉시실행함수 ()();  /  (함수)();

함수의 기능을 묶었다.

(function(){})(); => 하나의 함수를 그대로 수행하세요

```javascript
(function(){
	console.log(1+1);
})(); //2
//호출을 안했기때문에 결과가 안나와야하지만 즉시실행함수이기때문에 나옴

//===========3가지 같은값이 나옴 ================================
//즉시실행함수:함수를 만드는 즉시 실행해라 ===============
//1. 호출을 또다시 할이유X / 딱 한번만 호출해야하는 경우 
//2. 외부에서 접근을 못하게 할경우(내용수식을 바꿀수없게)
//표현식:함수만든후 호출하는것이 귀찮아서 생겨났음 (표현식을 짧게)
var pr = 100;
(function(myp){
	console.log(myp+1);
})(pr); //=101
//함수선언식 =================== 호이스트 현상
function Fn(myp){
	console.log(myp+1);
}
Fn(pr); //=101
//함수표현식 =================== 선언식이 호이스트 현상때문에 새로 생김/만듬
var Fn2 = function(myp){
	console.log(myp+1);
};
Fn2(pr); //=101
```

#### 화살표함수 (PHP 주로)

```javascript
var f1 = function ( ) { return 10; };
console.log(f1()); // =10

// 화살표함수 (function =>로 바꿈 / ()앞으로 갔다.)
var f2 = () => { return 10; };
console.log(f2()); // =10

//function이라는 글쓰기 귀찮아서..,, 나왔음

//변수
var f1 = function (a) { return a+10; };
console.log(f1(10)); // =20
// a위치.. 하하
var f2 = (a) => { return a+10; };
console.log(f2(10)); // =20
```

```javascript
// myCon.name; 아래랑 같은 의미
var myCon = {
	name: myName()
};
console.log(myCon.name);
```

#### 내장함수

```javascript
//내장함수: 자바스크립안에 미리 만들어놓은 기능(API)
console.log();
//myCon = console / name() = log()
//.log() = 매소드

var myName = function(b){ return b};

// myCon.name; 아래랑 같은 의미
var myCon = {
	name: function(b){ return b}
};
console.log(myCon.name("juae"));
```

함수는 여러기능을 하나로 묶어서 처리하는것을 의미하며,
생성과 동시에 실행되지 않지만, 호출하면 동작하게 한다. 

이때, 함수를 객체 내부에 생성시킨 후에 해당 객체를 실행하게 하면, 함수가 동작한다.
이때 동작하는 객체 명을 메소드라고 불린다. 

n() => "함수"     /     ~.n => n() "메소드"



191010

### 자바스크립트 문법

조건문: 특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 거짓이면 수행하지 않도록 처리하게 만드는 것
반복문: 2번이상의 반복 수행할 경우, 단순 반복하여 수행하게 하는 것이 아니라 자동으로 수행하도록 처리

### 조건문

-특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 거짓이면 수행하지 않도록 처리하게 만드는 것.
-**단순분기**/ if ~ else(하나의 조건을 기준으로 참/거짓), **다수분기**/ switch (다양한 조건 중에 하나를 확인)

#### if 문

```javascript
if(조건을 비교){조건이 참일경우 수행}

var i = 10;
var text; 

if (i < 10){
	text = "주어진 숫자는 10보다 작은수입니다.";
} 
console.log(text); //undefined
// var를 미리 선언하고 나중에 변수만 적는것이 좋다. 

====
var i = 10;
var text; 

if (i < 10){
	text = "주어진 숫자는 10보다 작은수입니다.";
} else {
	text = "주어진 숫자는 10보다 크거나 같은 수 입니다."
}
console.log(text); //주어진 숫자는 10보다 크거나 같은 수 입니다.

==== final
var i = 20;
var text; 

if (i < 10){
	text = "주어진 숫자는 10보다 작은수입니다.";
} else if (i===10) {
	text = "주어진 숫자는 10 입니다."
} else {
	text = "주어진 숫자는 10보다 큰 수 입니다."
}
console.log(text);
```

함수쓰는 방법: function(){}

```javascript
var myNum = function(par){
	var i = par;
	var text; 
	
	if (i < 10){
		text = "주어진 숫자는 10보다 작은수입니다.";
	} else if (i===10) {
		text = "주어진 숫자는 10 입니다."
	} else {
		text = "주어진 숫자는 10보다 큰 수 입니다."
	}
	return console.log(text);
};

myNum(30);
```

삼항연산자 vs if 문

```javascript
삼항연산자 = ()?참이면 수행 : 거짓이면 수행;
() ? 참 : () ? 참 : () ? 참 : 거짓 ;
//=======================
IF문 = if (){참이면 수행} else {거짓이면 수행}
if(){
	참
}else if(){
	참
}else{
	거짓
}
```

기본문법 : 비슷하댜

```javascript
function(){}
if(){}
switch(){}
for(){}
```

스위치문 switch (예: 키오스크 1.입금 2.출금 3.송금)

```javascript
//switch case, break, default
switch(what무언가=들어온아이 파악){
 case result1: 결과1 수행
 case result2: 결과2 수행
 case result3: 결과3 수행
 default: 모두 해당되지않는 경우 수행 
}
===처음부터 끝까지 수행한다. 그래서 break를 쓴다.
switch(what무언가=들어온아이 파악){
 case result1:
    결과1 수행
 break;
 case result2: 
    결과2 수행
 break;
 case result3: 
    결과3 수행
 break;
 default: 
    모두 해당되지않는 경우 수행
 break;(안써도 무방)
}
//======================
var i = 10;
switch(i){
	case 1:
		text = "숫자 1입니다."
		break;
	efault:
		text = "1보다 큰 수입니다."
		break;
}
console.log(text)
```

```javascript
switch(what무언가=들어온아이 파악){
 case result1:
    결과1 수행
 break;
 case result2: 
    결과2 수행
 break;
 case result3: 
    결과3 수행
 break;
 default: 
    모두 해당되지않는 경우 수행
 break;(안써도 무방)
}

//예시 ========================================================
var coffee = "?";
var text;

switch (coffee){
 case "americano":
  text = "얼죽아";
 break;
 case "latte": 
  text = "부드러운 라떼";
 break;
 case "frappucino": 
  text = "달달한 크림";
 break;
 default: 
  text = "물이 최고야";
 break;
}
console.log(text) // = 물이 최고야

//================== 깔끔하게 정리 menu = []
var coffee = "latte";
var text;
var menu = ["americano","latte", "frappucino"];

switch (coffee){
 case menu[0]:
  text = "얼죽아";
 break;
 case menu[1]: 
  text = "부드러운 커피";
 break;
 case menu[3]: 
  text = "달달한 크림";
 break;
 default: 
  text = "물이 최고야";
 break;
}
console.log(text) // = 부드러운 커피

//==== 변수 줄여서 쓰는 방법 (먼저 선언하는 것)
var coffee, text, menu
coffee = "latte";
menu = ["americano","latte", "frappucino"];
```

#### Prompt 사용해서 한것

```javascript
let coffee, text, menu;
menu = ["americano","latte", "frappucino","mocha"];
coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
// coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴: americano, latte, frappunino, mocha");
//==================
switch (coffee){
 case menu[0]:
  text = "얼죽아";
 break;
 case menu[1]: 
  text = "부드러운 커피";
 break;
 case menu[2]: 
  text = "달달한 크림";
 break;
 case menu[3]: 
  text = "모카카카카";
 break;
 default: 
  text = "물이 최고야";
 break;
}
console.log(text) // = 부드러운 커피
```

```javascript
//함수로 만든 버젼============
var myMenu = function(){
	let coffee, text, menu;
	menu = ["americano","latte", "frappucino","mocha"];
	coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
	
	switch (coffee){
	 case menu[0]:
	  text = "얼죽아";
	 break;
	 case menu[1]: 
	  text = "부드러운 커피";
	 break;
	 case menu[2]: 
	  text = "달달한 크림";
	 break;
	 case menu[3]: 
	  text = "모카카카카";
	 break;
	 default: 
	  text = "물이 최고야";
	 break;
	}
	console.log(text)
};
myMenu();
```

```javascript
//함수활용
var myMenu = function(){
	let coffee, text, menu;
	menu = ["americano","latte", "frappucino","mocha"];
	coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
	
	switch (coffee){
	 case menu[0]:
	  text = "얼죽아";
	 break;
	 case menu[1]: 
	  text = "부드러운 커피";
	 break;
	 case menu[2]: 
	  text = "달달한 크림";
	 break;
	 case menu[3]: 
	  text = "모카카카카";
	 break;
	 default: 
	  text = "물이 최고야";
	 break;
	}
	console.log(text)
};

var myBtn = document.getElementById("coffeeMenu");
myBtn.addEventListener("click", function(){
	myMenu();
});
// addEventListener 이벤트

//글씨 넣기
var myP = document.getElementsByTagName("p")[0];
myP.innerHTML = 'test'
```

```javascript
==Final
var myMenu = function(){
	let coffee, text, menu;
	menu = ["americano","latte", "frappucino","mocha"];
	coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
	
	switch (coffee){
	 case menu[0]:
	  text = "얼죽아";
	 break;
	 case menu[1]: 
	  text = "부드러운 커피";
	 break;
	 case menu[2]: 
	  text = "달달한 크림";
	 break;
	 case menu[3]: 
	  text = "모카카카카";
	 break;
	 default: 
	  text = "물이 최고야";
	 break;
	}
	console.log(text);
	
	let myP = document.getElementsByTagName("p")[0];
	myP.innerHTML = text;
};

var myBtn = document.getElementById("coffeeMenu");
myBtn.addEventListener("click", function(){
	myMenu();
});
```

191011 - 반복문

### 문법: 반복문

while = do~while
**while(){}**

for = for~in / forEach / for~of (es6)
**for(){}**

#### while (반복문)

조건이 거짓이 될수있는 상황이 없을경우는 계속 끝까지 반복한다.
꼭 거짓이 될수있는 상황을 만들어라! -> 과열된댜!!

최초의 값이 어떻한 조건을 보고있고 그 조건을 수행하고 그 후에 연산하게 되어있다. 
**최초 -> 조건 -> 수행 -> 연산** -> 조건 -> 수행 "계속 반복" (조건이 거짓이 되어야 빠져나온다.)

```javascript
var n = 0;
console.log(n);

while(n<=100){
	console.log(n);
	n++;
} //0~100 나옴
//조건이 거짓이 될수있는 상황이 없을경우는 계속 끝까지 반복한다.
//꼭 거짓이 될수있는 상황을 만들어라! -> 과열된댜!!
//===============
while(n<=100){
var n = 0;
	console.log(n);
	n++;
} 
console.log(n); //undefined
//============
while(n<=100){
var n = 0;
	console.log(n);
	n++;
} // n 이 숫자인지 아닌지 define가 없기때문에 수행을 안한다. 

//===============
var n = 0;
console.log(n);

while(n<=100){
	console.log(n);
	n++;
} 
console.log(n); // =101
//마지막까지 한후 n++ 이기때문에 101이 도출된다.

//최초의 값이 어떻한 조건을 보고있고 그 조건을 수행하고 그 후에 연산하게 되어있다. 
//최초 -> 조건 -> 수행 -> 연산 -> 조건 -> 수행 계속 반복 (조건이 거짓이되어야 빠져나온다.)
```

#### do while 반복문

while(){} 
do{  } while(  )  //일단수행하고 보고 조건을 이렇게 생겼어..

```javascript
var n = 0;
do{
	console.log(n);
	n++
} while(n<100) // 0~99까지 나옴
//참이든 거짓이든 일단 한번은 수행해라 
    
var n = 0;
do{
	console.log(n);
	n++
} while(n>100) //0
//조건이 거짓이라도 한번 수행
    
//=====================
do{
    var n = 0;
  	console.log(n);
	n++;
} while(n>100) //0으로 무한반복
```

#### for문

최초 -> 조건 -> 수행 -> 연산 -> 조건 -> 수행 계속 반복 (조건이 거짓이되어야 빠져나온다.)
한군데 모아서 하기때문에 실수 줄여준다.

```javascript
var n = 0;
for (n <= 10){
	console.log(n);
	n++
} //토큰에러 (문법에러)

//================= 정답 (while문 형식으로 할경우)
var n = 0;
for (;n <= 10;){
	console.log(n);
	n++
} // =0~10

//===============실제로 for문 사용시
for(var n = 0; n <=10; n++){
}
console.log(n); //11 밖에서 알면안된다..~~~~ 내부에서 끝낼려면
//===
for(let n = 0; n <=10; n++){
}
console.log(n); //not defined (error)
//
for(let n = 0; n <=10; n++){
console.log(n); // =0~10
}
console.log(n); //not defined (error)
//== 밖에서 알려주고 싶을때~~~~~
let n = 0
for(; n <=10; n++){
console.log(n); // =0~10
}
console.log(n); // =11
//최초 -> 조건 -> 수행 -> 연산 -> 조건 -> 수행 (반복)

```

**while문하고 for문 차이점:** //while문은 권장X
while(이중작업: 느려진다.)은 따로 써야하지만 for문은 한군데 모아서 하기때문에 실수 줄여준다.

#### for~in 문

-배열에서는 for~in을 사용하지 않는다. (느려진다. )



for(;조건;){}     =>     for(변수값; 조건 ; 연산){}

for(;in;){}

```javascript
var arr =["사과","배","바나나", "오렌지"];

for (var i in arr){
	console.log(i);
} // =0.1.2.3

// 안에있는 문자가 나오게 할려면 ==================
var arr =["사과","배","바나나", "오렌지"];

for (var i in arr){
	console.log(arr[i]);
} // =사과. 배. 바나나. 오렌지

//배열형식 브라우저 속도 느려진다. 절대 쓰지마라
//중괄호기법
//배열형식이 아닌 객체형식을 쓰는것이 좋다. 

// 배열형식일때 권장 ================
var arr =["사과","배","바나나", "오렌지"];

for (let i=0; i<4; i++){
	console.log(arr[i]);
}
```

```javascript
// for in 문: 색깔이 나오게 하고 싶을때
let obj = { 
 "red":"사과",
 "yellow":"바나나",
 "orange":"오렌지",
 "green":"키위",
 "purple":"포도"};

for (let i in obj) {
	console.log(i);
}; //앞쪽에 있는 속성명을 가져온다. (영어: 색깔들)

// for in 문: 과일들이 나오게 하고싶을때====================
let obj = { 
 "red":"사과",
 "yellow":"바나나",
 "orange":"오렌지",
 "green":"키위",
 "purple":"포도"};

for (let i in obj) {
	console.log(obj[i]);
}; //앞쪽에 있는 속성명을 가져온다. (한글: 과일들)

//for문으로는 undefine으로 나오기때문에 for in으로 사용해야한다.
```

#### for문

for(let i =0; i<10; i++){} //= 숫서를 가지고 있는 형태 일반형식, 배열

#### for in문

for(let i in object){} //객체일때 사용

#### for each문 (매서드 .())

[].forEach(function(){})  // 함수안에 함수를 또 써야한다. 

```javascript
var myArr = ['빨강','파랑','노랑','녹색','보라'];

myArr.forEach(function(data){
	console.log(data)
}); //빨강, 파랑, 노랑, 녹색, 보라 한개씩 뿌려준다.
```

## 반복문 요점정리 

```javascript
//while 문 *권장XX
var i = 0;
while (i<10){...;i++;}

//do while문
var i = 0;
do{...;i++} while(i<10);

//for문
for(let i =0; i<10; i++){...} //= 숫서를 가지고 있는 형태 일반형식, 배열

//for in문
for(let i in obj){...} //= 객체일때 사용

//forEach문
[변수].forEach(function(data){...(data에 관련수행)}); //= 배열(함수안에 함수를 또 써야한다.)
```

```javascript
//사용하는 예제
var pr = [
    {img:'pr1.jpg', text:'lerem5', price:'10000'}
    {img:'pr1.jpg', text:'lerem5', price:'10000'}
    {img:'pr1.jpg', text:'lerem5', price:'10000'}
];
```

#### 자바스크립트에 CSS스타일 넣어보기

```javascript
//과거형
//var product = document.getElementById('prdocut');

//현재형
let product = document.querySelector('#product');
product.style.width = "100%";
product.style.height = "auto"; // 단위안써도 자동px (쓰는것 권장)
product.style.minHeight = "300px"; //min-height -> minHeight
product.style.backgroundColor = "#f96"; //자바스크립(-)X => camelCase로 변경

let ul = document.createElement('ul'); // ul 태그 생성
product.appendChild(ul); //ul 생성해서 넣기
ul = document.querySelector('#product>ul');
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.margin = "auto";
ul.style.backgroundColor = "#77f";

/*
let li = document.createElement('li');
ul.appendChild(li); //여기에 ul은 태그가 아니라 ul변수
li = document.createElement('li'); //생성하고 
ul.appendChild(li); //자식요소로 옮긴다 (집어넣는다)
li = document.createElement('li');
ul.appendChild(li);
//그래서 반복문을 사용해라
*/

let ar= ['우유', '쥬스','차','커피', '슬러시','요거트'];
console.log( ar.length ); //length(변수의 목록의 개수)

// 반복문 사용
for (let i=0; i<ar.length; i++){
	let li = document.createElement('li');
	let myText = document.createTextNode(ar[i]);
	li.appendChild(myText);
	ul.appendChild(li);
}
```



#### 생성 (요소, 값) -순수한 자바스크립트(es6기반의 코드)

**document.querySelector('아이디나 클라스적기');** 아이디나 클라스 선택해라 

**document.createElement('tag');** //tag element을 document에 생성해라

**document.createTextNode('입력할 내용적기');** //document 입력하라 내용을 적어라

**(넣을곳).appenChild(넣을내용);** //넣을내용을 넣을곳에다 넣어주어라

```javascript
(function($){
	//$()
	$('#myBox').css({'width':'80%','height':'900px',
		'margin':'auto', 'backgroundColor': '#ddd'});

	//생성 (요소, 값)
	const myBox = document.querySelector('#myBox');
	const myh2 = document.createElement('h2');
	let h2Text = document.createTextNode('jQuery text 생성하기');
	myh2.appendChild(h2Text);
	myBox.appendChild(myh2);

})(jQuery);
```

ON  jQuery

```on
on () -> jQuery
addEventListener() -> javascript 
attatchmentEvent() -> javascript (IE)
```

#### Return

```html
리턴이 없는 경우는 console.log(undefined 결과) 
<script>
   let fn = function(n){
    let rel = n+10;
   }
   console.log(fn(10));
 </script>
//----------------------------------------
<script>
   let fn = function(n){
    let rel = n+10;
    return rel;
   }
   console.log(fn(10));
 </script>
//리턴: 거슬러서 결과값을 나한테 돌려줘라
//리턴 뒤에 글을 쓰면 아무것도 안이루어진다. 
//모든글에 리턴을 써야하지만 자바스크립트는 자동 리턴이 들어가게 되어있다. 
```

#### this

```html
 <script>
   let t = function(){
    return this;
   }
   console.log(t()); //답: window
 </script>
//답: window  일반적인 this의 의미는 window자체이다. 
```

#### NEW : 생성자

```html
생성자: js에서 new 이름을 붙이면 기존의 기능을 복제처리해서 새로 생성한다는 의미 
 <script>
   let t = function(){
    return this;
   }
   console.log(t());

   let myt = new t();
   console.log(myt); 답 t{} '객체라는 의미'
 </script>
```

```html
 <script>
//모델 샘플링
//t라는 함수를 만들어서 t를 사용할려고한다. 
    let t = function(n){
    return this.name = n;  } 
//샘플에 기능을 집어넣어도 들어는 가지만 동작은 안한다. 
//새로 만들어서 집어넣어야한다. 
   let beforeT = t('juae');
   console.log(beforeT.name); //답 undefined
//NEW : 모델 배포 / 모델 샘플을 복제해서 생성 
//기본형식은 똑같지만 안에 있는 내용은 다르다. 
   let myt = new t('juae'); 
   console.log(myt.name); //답 juae
 </script>

this의 두가지
1. 브라우저 (window)
2. new(생성자:기존에 있는것을 복제해서 생긴것)에 의해 생성된 변수 / 생성자와 처리된 new 할당이름의 변수 
```

```html
 <script>
   let t = function(n,r){
    this.name = n;
    this.rel = r; }

   let myt = new t('juae','this란?'); 
   console.log(myt.name, myt.rel); //답: juae, this란?
 </script>
```





---

**스코프(Scope)**

```javascript
var hello='hell';

function sayH(){
    var hello= 'hello in function';
	console.log(hello);
}

console.log(hello); //hell
sayH(); //hello in function
console.log(hello);//hell
//안에 있는 var을 지우면된다. 
```

```javascript
let hello = "hell";

function sayHell(){
   hello = "new hello";
}
hello //"hell"
sayHell(); //"new hello"
```

```javascript
const hello = "hell";

function sayHell(){
   hello = "new hello";
}
hello //"hell"
sayHell() //에러
//VM3514:4 Uncaught TypeError: Assignment to constant variable.
```

```
https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19
```



```javascript
let num = 12345;
console.log(num); //12345
console.log('num'); //문자로 인식,변수로인식X
//숫자 혹 변수에는 따음표 사용X
```

```javascript
let num = 'abc';
num = 'xido';
let xname = num;
num = 'green';
console.log(xname); //'xido'
//green이라는 단어가 안나오고 xido가 나온다 이유:나중에 지정해서

let arr = ['xido']; //배열
arr[0] = 'green';
let night = arr;
arr[0]='half time'
console.log(night[0]); //'half time'

//참조변수: 같은 주소를 가르킨다.
```

배열 메소드 [참고][http://blog.302chanwoo.com/2017/08/javascript-array-method/]

```javascript
const ar = [];
console.log(ar[5]); //undefined
console.log(ar[5]+'10'); //undefined10

//push: 뒤에 더하다 =====
const ar = [];
ar.push('apple');
ar.push('xido');
ar.push('ms');
console.log(ar); //["apple", "xido", "ms"]
//pop: 뒤 빼기 =====
ar.pop();
console.log(ar); //["apple", "xido"]
console.log(ar.length); //2

//concat:합치다 =====

const ar = ['ms', 'yh', 'sh'];
const ar2 = ['hj', 'hy'];
let kr = ar.concat(ar2);
console.log(kr); //["ms", "yh", "sh", "hj", "hy"]
let kr2 = ar2.concat(ar);
console.log(kr2); //["hj", "hy", "ms", "yh", "sh"]
let kr3 = ar.concat(ar);
console.log(kr3); //["ms", "yh", "sh", "ms", "yh", "sh"]

// 이름순/가격순 등 재배치
gr.sort();

// 반전해서 재배치?
gr.reverse();

```





