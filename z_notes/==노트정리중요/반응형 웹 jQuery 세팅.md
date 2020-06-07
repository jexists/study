# 반응형 웹 jQuery 세팅

```
-1:없다라는 의미 
indexOf() 단어찾을때 사용
```



```
브라우저 크기 판단 -> 디바이스이름정의
수치 -> 수치를 범주(각 영역 명칭) -> 해당하는 명칭에 맞게 기능 호출(load)
+&알파: 브라우저 크기 변경시 수치 범주 재판단
```



#### 세로 가로 변경일때 자동 새로고침


```javascript
// jq_rwd_01.js

(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		console.log(nowWinW); //변경된 사이즈
		location.reload(); //새로고침
	})
})(jQuery);
```
#### 세로변경일때 새로고침X

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침
		}
	})
})(jQuery);
```

### 현재디바이스 크기 파악하여 정의

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
 if (winW <= mob) { 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
//===============================
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	//console.log(nowWinW); //변경된 사이즈
	if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

#### if 문 함수처리

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
} //DeviceCheck();

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log(beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

#### 사이즈 변환 확인

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('beforeDevice', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('beforeDevice', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		let afterDevice = DeviceCheck();
		console.log('afterDevice', afterDevice);
		//location.reload(); //새로고침
		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(w){
 if (w <= mob) {
 	nowDevice = 'mobile';
 }else if(w > mob && w <= tab){
 	nowDevice = 'tablet';
 }else if(w > tab && w <= pc){
 	nowDevice = 'pc browser';
 }else if(w > pc && w <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('전', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		let afterDevice = DeviceCheck();
		console.log('후', afterDevice);
		//location.reload(); //새로고침
		}
	})
})(jQuery);
```



```javascript
// jq_rwd_01.js

(function($){
 //현재 디바이스 크기 파악하여 정의
 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
 //함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = 'mobile';
  }else if(w > mob && w <= tab){
  	nowDevice = 'tablet';
  }else if(w > tab && w <= pc){
  	nowDevice = 'pc browser';
  }else if(w > pc && w <= laptop){
  	nowDevice = 'laptop';
  }else{nowDevice = 'pcfull';}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){
        //이전의값과 지금의 값이 다를 경우 && 이전과 이후의 이름이 다를경우에만 
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

```javascript
// jq_rwd_01.js

(function($){
//반응형 크기에 따라 불러오는 파일 정의
let myD = ['mobile','tablet','pc']; //myD[0] 배열형식가능
 const wrap = $('#wrap');
 let tempUrl ='./rwd_temp/';
 const LoadFile = function(w){
 	switch(w){
 		case 'mobile': wrap.load(tempUrl + 'mob.html');
 		break;
 		case 'tablet': wrap.load(tempUrl + 'tab.html');
 		break;
 		case 'pc': wrap.load(tempUrl + 'pcbase.html');
 		break;
 		case 'laptop': wrap.load(tempUrl + 'laptop.html');
 		break;
 		case 'pcfull': wrap.load(tempUrl + 'pcfull.html');
 		//default사용가능
 		break;
 	}//switch(w)
 }//LoadFile()

//현재 디바이스 크기 파악하여 정의 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
//함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = 'mobile';
  }else if(w > mob && w <= tab){
  	nowDevice = 'tablet';
  }else if(w > tab && w <= pc){
  	nowDevice = 'pc browser';
  }else if(w > pc && w <= laptop){
  	nowDevice = 'laptop';
  }else{nowDevice = 'pcfull';}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 LoadFile(beforeDevice);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){//이전의값과 지금의 값이 다를 경우
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

#### 파이널

```javascript
// jq_rwd_01.js

(function($){
//반응형 크기에 따라 불러오는 파일 정의
let mySet = ['mobile','tablet','pc','laptop','pcfull']; //myD[0] 배열형식가능
 const wrap = $('#wrap');
 let tempUrl ='./rwd_temp/';
 const LoadFile = function(w){
 	//for문 사용 가능/ 단순화 가능
 	switch(w){
 		case mySet[0]: wrap.load(tempUrl + 'mob.html');
 		break;
 		case mySet[1]: wrap.load(tempUrl + 'tab.html');
 		break;
 		case mySet[2]: wrap.load(tempUrl + 'pcbase.html');
 		break;
 		case mySet[3]: wrap.load(tempUrl + 'laptop.html');
 		break;
 		case mySet[4]: wrap.load(tempUrl + 'pcfull.html');
 		//default사용가능
 		break;
 	}//switch(w)
 }//LoadFile()

//현재 디바이스 크기 파악하여 정의 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
//함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = mySet[0];
  }else if(w > mob && w <= tab){
  	nowDevice = mySet[1];
  }else if(w > tab && w <= pc){
  	nowDevice = mySet[2];
  }else if(w > pc && w <= laptop){
  	nowDevice = mySet[3];
  }else{nowDevice = mySet[4];}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 LoadFile(beforeDevice);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){//이전의값과 지금의 값이 다를 경우
	location.reload(); //새로고침
	}
 })
})(jQuery);
```



---

```javascript
//rwd_check.js

(function($){
	//각 디바이스별 크기 기준 설정
	let mobile=480, tablet=768, laptop=1366, pc=1600;
	//기본 디바이스 명칭 설정
	let nowSize;
	const device = ['mobile','tablet','laptop','pc','pcfull'];
	let beforeW = $(window).outerWidth(true); //마진값까지 포함한 값

	const DeviceSet = function(winW){
	 if(winW <= mobile){
	 	nowSize = device[0];
	 }else if(winW > mobile && winW <= tablet){
	 	nowSize = device[1];
	 }else if(winW > tablet && winW <=laptop){
	 	nowSize = device[2];
	 }else if(winW > laptop && winW <= pc){
	 	nowSize = device[3];
	 }else{
	 	nowSize = device[4];}
	 return nowSize;
	}
	let beforeDevice = DeviceSet(beforeW);

	//사이즈 변경 체크
	$(window).on('resize',function(){
		let afterW = $(window).outerWidth(true);
		let afterDevice = DeviceSet(afterW);
		console.log(nowSize);
		if(beforeDevice !== afterDevice){
		location.reload();
		}

	});
})(jQuery);
```



파이어폭스: location.reload 새로고침 기능X

```javascript
//rwd_check.js

(function($){
	//각 디바이스별 크기 기준 설정
	let mobile=480, tablet=768, laptop=1366, pc=1600;
	//기본 디바이스 명칭 설정
	let nowSize;
	const device = ['mobile','tablet','laptop','pc','pcfull'];
	let beforeW = $(window).outerWidth(true); //마진값까지 포함한 값

	const DeviceSet = function(winW){
	 if(winW <= mobile){
	 	nowSize = device[0];
	 }else if(winW > mobile && winW <= tablet){
	 	nowSize = device[1];
	 }else if(winW > tablet && winW <=laptop){
	 	nowSize = device[2];
	 }else if(winW > laptop && winW <= pc){
	 	nowSize = device[3];
	 }else{
	 	nowSize = device[4];}
	 return nowSize;
	}
	let beforeDevice = DeviceSet(beforeW);
	console.log(navigator.userAgent); //인터넷브라우저 종류 검색
	//사이즈 변경 체크
	$(window).on('resize',function(){
		let afterW = $(window).outerWidth(true);
		let afterDevice = DeviceSet(afterW);
		console.log(nowSize);
		if(beforeDevice !== afterDevice){
		//location.reload();
		location.reload = location.reload; //강제 새로고침
		}
	});
})(jQuery);
```

### 파이널 on 191120

```javascript
//rwd_check.js

(function($){
	const conBox = $('#conBox');


	//각 디바이스별 크기 기준 설정
	let mobile=480, tablet=768, laptop=1366, pc=1600;
	//기본 디바이스 명칭 설정
	let nowSize;
	const device = ['mobile','tablet','laptop','pc','pcfull'];
	let beforeW = $(window).outerWidth(true); //마진값까지 포함한 값

	//===== 각 디바이스 상황에 맞는 data 처리
	const DeviceData = function(wid){
		switch(wid){
			case device[0]:
			 conBox.load('./temp/main_mob.html');
			break;
			case device[1]:
			 conBox.load('./temp/main_tab.html');
			 $('body').append('<script src="../js/tab.js"></script>');
			break;
			case device[2]:
			// break;
			case device[3]:
			// break;
			case device[4]:
			 conBox.load('./temp/main_pc.html',function(){
			 	$('head').find('title').before('<link rel="stylesheet" href="../css/pc.css">');
			 	$('body').append('<script>console.log("pc");</script>');
			 });
			break;
		}
	};
	//=========================

	//디바이스 크기 체크
	const DeviceSet = function(winW){
	 if(winW <= mobile){
	 	nowSize = device[0];
	 }else if(winW > mobile && winW <= tablet){
	 	nowSize = device[1];
	 }else if(winW > tablet && winW <=laptop){
	 	nowSize = device[2];
	 }else if(winW > laptop && winW <= pc){
	 	nowSize = device[3];
	 }else{
	 	nowSize = device[4];}
	 return nowSize;
	}
	let beforeDevice = DeviceSet(beforeW);
  
  DeviceData(beforeDevice);

	console.log(navigator.userAgent); //인터넷브라우저 종류 검색
	//인터넷브라우저 종류를 검색해서 소문자로 나타내라
	let browser = navigator.userAgent.toLowerCase();
	//인터넷브라우저 종류에 firefox라는 단어가 나오지 않으면
	//파이어폭스인가 아닌가 판단 ================
	let nowb = null;

	if(browser.indexOf('firefox') !== -1){
		nowb = 'firefox';
	}else{
		nowb = 'other';
	}
	console.log(nowb);

	//사이즈 변경 체크
	$(window).on('resize',function(){
		let afterW = $(window).outerWidth(true);
		let afterDevice = DeviceSet(afterW);
		console.log(nowSize);
		if(beforeDevice !== afterDevice){
		if(nowb == 'firefox'){
			window.location = window.location; //강제 새로고침
		}else{
			location.reload();}
		}
	});
})(jQuery);
```

