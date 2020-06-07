# parallex

```javascript
// parallax_01.js

(function($){
	let win = $(window);
	/* 기본으로 변수지정 // 반복문으로 변수 지정할 예정
	let p00 = $('.par_00'), p01 = $('.par_01'), p02 = $('.par_02'), p03 = $('.par_03'), p04 = $('.par_04');
	let p05 = $('.par_05'), p06 = $('.par_06'), p07 = $('.par_07'), p08 = $('.par_08');*/
	let par = [];

	const vb = $('#viewBox');
	for (let i=0; i < vb.children('div').length; i++){
		let p = '.par_0' + i;
		par.push(p);
	}
	console.log(par);

	//반복문
	let winH = win.outerHeight();
	win.on('scroll', function(){
		let scroll = win.scrollTop();
		for(let j=0; j < par.length; j++){
			$(par[j]).css({top: -scroll / (par.length - j) });
		}
	});

/* background이미지를 움직이는것이 아니라 그림
position으로 위치를 조절하기에는 원하는대로 하기 힘들어서
box자체를 틀과 동일하게 만들었다. 

	let winH = win.outerHeight();
	win.on('scroll', function(){
		let scroll = win.scrollTop()/3 * 3;
		//console.log(scroll);
		$(par[0]).css({backgroundPositionY: -scroll/8})
		$(par[1]).css({backgroundPositionY: -scroll/7})
		$(par[2]).css({backgroundPositionY: -scroll/6})
		$(par[3]).css({backgroundPositionY: -scroll/5})
		$(par[4]).css({backgroundPositionY: -scroll/4})
		$(par[5]).css({backgroundPositionY: -scroll/3})
		$(par[6]).css({backgroundPositionY: -scroll/2})
		$(par[7]).css({backgroundPositionY: -scroll})
		$(par[8]).css({backgroundPositionY: -scroll})
	})
/*	//[참고] 반응형 ========================
	// $(par[0]).css({backgroundColor:'#f00'})
	let winW = win.outerWidth();
	if(winW <= 1600){
		vb.children('div').css({backgroundSize:'170%'});
	}*/

/*	반복문으로 바꿀예정
	let winH = win.outerHeight();
	win.on('scroll', function(){
		let scroll = win.scrollTop();
		//console.log(scroll);
		$(par[0]).css({top: -scroll/8})
		$(par[1]).css({top: -scroll/7})
		$(par[2]).css({top: -scroll/6})
		$(par[3]).css({top: -scroll/5})
		$(par[4]).css({top: -scroll/4})
		$(par[5]).css({top: -scroll/3})
		$(par[6]).css({top: -scroll/2})
		$(par[7]).css({top: -scroll})
		$(par[8]).css({top: -scroll})
	})*/
})(jQuery);
```

#### 배열 const가능

```javascript

	const conBox = $('#conBox');
	let conList = conBox.find('li');
	const liOffset = []; 	//배열형식[]: 참조변수 //const는 가능..,, 
	//배열형식은 안에 있는 객체수정이 가능하다. 

	for(let i = 0; i<conList.length; i++){
		liOffset.push(conList.eq(i).offset().top);
        //liOffset[i] = conList.eq(i).offset().top; 같다.
	}
	console.log(liOffset)
```

