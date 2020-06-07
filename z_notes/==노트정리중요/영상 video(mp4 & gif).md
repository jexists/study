# 영상 video(mp4 & gif)

포토샵: file - import - video frames



```javascript
// jq_img_change.js

(function($){
 const wrap = $('#wrap');
 const myForm = wrap.find('.mouse_form');
 const myLocation = wrap.find('.mouse_location');

 let imgUrl = '../../img/gear/';
 myForm.css({backgroundImage:`url('${imgUrl}gear_001.png')`})

 myForm.on('mousemove', function(e){
 	let mv = e.originalEvent.offsetX;
 	//offsetX : 선택된 예의 범위 내에서 0~n까지의 x값 (가장많이 사용)
 	//clientX : 브라우저 기준 (position fixed)
 	//pageX : 전체 스크롤 기준
 	//screenX: 스크린 모니터 화면 자체
 	console.log(mv);
 });
})(jQuery);
```



```javascript
// jq_img_change.js


(function($){
 const wrap = $('#wrap');
 const myForm = wrap.find('.mouse_form');
 const myLocation = wrap.find('.mouse_location');

 let imgUrl = '../../img/gear/';
 //myForm.css({backgroundImage:`url('${imgUrl}gear_001.png')`})
 let j=0;
 for(let i=0;i<100;i++){
 	if(i < 9){j='00'+(i+1);
 	}else if(i < 99){j='0'+(i+1);
 	}else{j=(i+1);}
 myForm.append(`<img src="${imgUrl}gear_${j}.png" alt="이미지삽입">`);
 }
 const myImg = myForm.find('img');
 myImg.parent().css({position:'relative', overflow:'hidden'})
 myImg.css({position:'absolute', top: 0, left:0})
 myImg.eq(0).siblings().hide();
 myForm.on('mousemove', function(e){
 	let mv = e.originalEvent.offsetX;
 	//offsetX : 선택된 예의 범위 내에서 0~n까지의 x값 (가장많이 사용)
 	//clientX : 브라우저 기준 (position fixed)
 	//pageX : 전체 스크롤 기준
 	//screenX: 스크린 모니터 화면 자체
 	//console.log(mv);
 	let myi = Math.floor(mv / 800 *100)+1;
 	//.mouse_form 넓이 =800  /100 = 이미지갯수
 	//현재 마우스위치값 / 전체값(넓이) * 이미지갯수의 정수값
 	// math.floor / parseInt
 	let i;
 	if(myi < 10){i='00'+myi;
 	}else if(myi < 100){i='0'+myi;
 	}else{i=myi;}
 	myForm.css({backgroundImage:`url('${imgUrl}gear_${i}.png')`})
 	console.log(myi);

 	
 });
})(jQuery);
```





이미지 다 불러온 후 사용

```javascript
// jq_img_change.js


(function($){
 const wrap = $('#wrap');
 const myForm = wrap.find('.mouse_form');
 const myLocation = wrap.find('.mouse_location');

 let imgUrl = '../../img/gear/';
 //myForm.css({backgroundImage:`url('${imgUrl}gear_001.png')`})
 let j=0;
 for(let i=0;i<100;i++){
 	if(i < 9){j='00'+(i+1);
 	}else if(i < 99){j='0'+(i+1);
 	}else{j=(i+1);}
 myForm.append(`<img src="${imgUrl}gear_${j}.png" alt="이미지삽입">`);
 }
 const myImg = myForm.find('img');
 myImg.parent().css({position:'relative', overflow:'hidden'})
 myImg.css({position:'absolute', top: 0, left:0})
 myImg.eq(0).siblings().hide();
 myForm.on('mousemove', function(e){
 	let mv = e.originalEvent.offsetX;
 	//offsetX : 선택된 예의 범위 내에서 0~n까지의 x값 (가장많이 사용)
 	//clientX : 브라우저 기준 (position fixed)
 	//pageX : 전체 스크롤 기준
 	//screenX: 스크린 모니터 화면 자체
 	//console.log(mv);
 	let myi = Math.floor(mv / 800 *100);
 	//.mouse_form 넓이 =800  /100 = 이미지갯수
 	//현재 마우스위치값 / 전체값(넓이) * 이미지갯수의 정수값
 	// math.floor / parseInt
 	let i;
 	if(myi < 10){i='00'+myi;
 	}else if(myi < 100){i='0'+myi;
 	}else{i=myi;}
 	//myForm.css({backgroundImage:`url('${imgUrl}gear_${i}.png')`})
 	console.log(myi);

 	myImg.eq(myi).siblings('img').hide();
 	myImg.eq(myi).show();


 });
})(jQuery);
```



```javascript
// jq_img_change.js

(function($){
 const wrap = $('#wrap');
 const myForm = wrap.find('.mouse_form');
 const myLocation = wrap.find('.mouse_location');

 let imgUrl = '../../img/gear/';
 //myForm.css({backgroundImage:`url('${imgUrl}gear_001.png')`})
 let j=0;
 for(let i=0;i<100;i++){
 	if(i < 9){j='00'+(i+1);
 	}else if(i < 99){j='0'+(i+1);
 	}else{j=(i+1);}
 myForm.append(`<img src="${imgUrl}gear_${j}.png" alt="이미지삽입">`);
 }
 const myImg = myForm.find('img');
 myImg.parent().css({position:'relative', overflow:'hidden'})
 myImg.css({position:'absolute', top: 0, left:0})
 myImg.eq(0).siblings().hide();
 myForm.on('mousemove', function(e){
 	let mv = e.originalEvent.offsetX;
 	//offsetX : 선택된 예의 범위 내에서 0~n까지의 x값 (가장많이 사용)
 	//clientX : 브라우저 기준 (position fixed)
 	//pageX : 전체 스크롤 기준
 	//screenX: 스크린 모니터 화면 자체
 	//console.log(mv);
 	let thisWidth = $(this).outerWidth();
 	let myi = Math.floor(mv / thisWidth *100);
 	//.mouse_form 넓이 =800  /100 = 이미지갯수
 	//현재 마우스위치값 / 전체값(넓이) * 이미지갯수의 정수값
 	// math.floor / parseInt
 	let i;
 	if(myi < 10){i='00'+myi;
 	}else if(myi < 100){i='0'+myi;
 	}else{i=myi;}
 	//myForm.css({backgroundImage:`url('${imgUrl}gear_${i}.png')`})
 	console.log(myi);

 	myImg.eq(myi).siblings('img').hide();
 	myImg.eq(myi).show();

 });
})(jQuery);
```



```javascript
// jq_img_change.js


(function($){
 const wrap = $('#wrap');
 const myForm = wrap.find('.mouse_form');
 const myLocation = wrap.find('.mouse_location');

 let imgUrl = '../../img/gear/';
 //myForm.css({backgroundImage:`url('${imgUrl}gear_001.png')`})
 let j=0;
 for(let i=0;i<100;i++){
 	if(i < 9){j='00'+(i+1);
 	}else if(i < 99){j='0'+(i+1);
 	}else{j=(i+1);}
 myForm.append(`<img src="${imgUrl}gear_${j}.png" alt="이미지삽입">`);
 }
 const myImg = myForm.find('img');
 myImg.parent().css({position:'relative', overflow:'hidden'})
 myImg.css({position:'absolute', top: 0, left:0})
 myImg.eq(0).siblings().hide();
 myLocation.on('mousemove', function(e){
 	let mv = e.originalEvent.offsetX;
 	//offsetX : 선택된 예의 범위 내에서 0~n까지의 x값 (가장많이 사용)
 	//clientX : 브라우저 기준 (position fixed)
 	//pageX : 전체 스크롤 기준
 	//screenX: 스크린 모니터 화면 자체
 	//console.log(mv);
 	let thisWidth = $(this).outerWidth();
 	let myi = Math.floor(mv / thisWidth *100);
 	//.mouse_form 넓이 =800  /100 = 이미지갯수
 	//현재 마우스위치값 / 전체값(넓이) * 이미지갯수의 정수값
 	// math.floor / parseInt
 	let i;
 	if(myi < 10){i='00'+myi;
 	}else if(myi < 100){i='0'+myi;
 	}else{i=myi;}
 	//myForm.css({backgroundImage:`url('${imgUrl}gear_${i}.png')`})
 	console.log(myi);

 	myImg.eq(myi).siblings('img').hide();
 	myImg.eq(myi).show();


 });
})(jQuery);
```

