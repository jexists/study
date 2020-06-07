# Ajax

 Ajax는 **JavaScript의 라이브러리**중 하나이며 Asynchronous Javascript And Xml(비동기식 자바스크립트와 xml)의 약자입니다. 브라우저가 가지고있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법 이며 Ajax를 한마디로 정의하자면 JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술이라고 할 수 있겠습니다. 

ajax = 비동기처리한다. (load)

$.post() :보안형식 / 비공개버전

$.get() : 오픈형식 / 공개버전

$.getJSON()

$.ajax() : 모든 방식 전송 가능한 통합 함수 (*중요)

$.ajax라는 메소드

```javascript
$.ajax({
async:false //동기/비동기:async //기본(true)
type: //get/post
url:  //data주소값
datatype:
error //data 에러시 발생하는 내용 처리방법
success //성공시 처리방법 문제없이 불러왔을때 수행 
})
```

## .json 파일

.json = 배열과 객체를 섞어쓰는 방식

#### 주의사항

```json
따음표는 오로지 쌍따음표만 사용가능 ""
주석 X
```



```javascript
	let imgList = [//이미지파일명
	{title:'philippine', content:'필리핀....', linkText:'바로가기', link:'https://www.naver.com/', bgimg: 'slide_01.jpg'},//슬라이드1
	{title:'taiwan', content:'타이완....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_02.jpg'},//슬라이드2
	{title:'united state of america', content:'미국....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_03.jpg'},//슬라이드3
	{title:'canada', content:'캐나다....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_04.jpg'},//슬라이드4
	{title:'korea', content:'한국....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_05.jpg'},//슬라이드5 
    ];	
	console.log(imgList);
```

``` json
$.ajax({
    async: true, //안쓰면 기본 true => 값이 안나온다.
	type:'GET', //공개
	url:'../data/slide_04.json', //html기준
	dataType:'json', // 불러오는 파일의 형식
	error:function(){console.log('data error');}, //불러오지못할경우
	success: function(){console.log('good');}//성공한 상황일때
})
```

```json
	$.ajax({
		type:'GET',
		url:'../data/slide_04.json',
		dataType:'json',
		error:function(){console.log('data error');},
		success: function(data){console.log(data);}
	})
```

#### 파이널 ajax;

```json
	$.ajax({
		async: false,
		type:'GET',
		url:'../data/slide_04.json',
		dataType:'json',
		error:function(){console.log('data error');},
		success: function(d){imgList = d; return imgList}
	})
	console.log(imgList);
```

*메모장(.txt)파일도 가능하지만 객체화 되지않는다. 그냥 문자로만 인식!



---

```javascript
// slide_indi_n_btn.js

(function($){
//데이타 불러오기
 let imgUrl = '../img/slide_test_02/'
 let dataUrl = '../data/'
	$.ajax({
		async:false,
		dataType: 'json',
		url: dataUrl + 'slide_indi_n_btn.json',
		success: function(data){
			console.log(data);
		}
	});
})(jQuery);
```



