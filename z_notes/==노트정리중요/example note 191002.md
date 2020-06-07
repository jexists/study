/*반응형 기준
 - pc: 769px ~ 960px
 - table: 481px ~ 768px;
 - mobile: ~ 480px;

 vw계산방법: 기준이 되는 크기에서 높이값/기준가로값 *100 = vw;
 vw높이 설정시 min-height, max-height사용여부 판단

background-size:cover, contain, size직접주기



파비콘 크기) 64px 64px



높이 자동으로 하는 이유: 구글 이미지 더 보기 : 알아서 늘어나라

button은 div안에 넣어줘야한다

inherit 부모의 값을 똑같이 쓴다. 
  퍼센트랑 달라 그냥 값만 같음 크기는 다를수있다

### 표준기기 사이즈

모바일 기기 (삼성) - 360(세로)/480(가로)

테블릿기기 - 768기준

노트북(Laptop): 표준 - 1366

데스크탑(PC) 한국표준 - 1920

------

### 일러스트 표준 크기

#### ~~280~~  480  768  ~~1024~~  1366(1280에서 보이는 형태)  1920

------

### 수정된 디자인 파일

#### 480px	768px	1280px	1920px



```css
/*CSS에서 파일 불러오기*/
@import url("../_url/rwd_test_02_common.css");
@import url("../_url/rwd_test_02_mobile_480.css");
@import url("../_url/rwd_test_02_tablet_768.css");
@import url("../_url/rwd_test_02_pc_960.css");
```



미디어쿼리

```css
/*공통영역===============*/

/*design 기준: 480px*/
@media screen and (max-width:489px){}

/*design 기준 480px*/
@media screen and (min-width:480px) and
(max-width:767px) {}

/*design 기준 768px*/
@media screen and (min-width:768px) and
(max-width:959px) {}

/*design 기준 960px*/
@media screen and (min-width:960px){}

작업순서
1. 큰틀 체크 (반응형일시-모바일먼저)
2. 각 범위의 큰 형태가 틀어지지 않게 체크
3. 중간범위 형태들 내용잡고, 큰틀의 높이값 한번더 체크
4. 숨겨진 기능들(큰범위)을 미리 세팅 확인
5. 링크, 상세내용들을 체크
6. 이미지 처리, 애니메이션, 제어 등의 기능을 처리

---
/*design 기준: 480px*/
@media screen and (max-width:479px){}

/*design 기준 480px*/
@media screen and (min-width:480px) and (max-width:767px) {}

/*design 기준 768px*/
@media screen and (min-width:768px) and (max-width:959px) {}

/*@design 기준 960px*/
@media screen and (min-width:960px) {}

```

```
transition-property: all; 
  어떤속성을 줄거니? all / left
  transition-duration: ; 시간
  transition-timing-function 시간의 따른 함수
- linear (동일한 속성) 
- ease (점점 빠르게갔다가 점점 느리게/ 자연스럽게)
- ease-in
- ease-out
- ease-in-out (들어가는 속도와 나가는 속도가 같다)
  transition-delay: 500ms 지연 (1초);}.*/
/*transition, animation, js-animate 기능에서
시간에 따른 흐름의 형태 파악하는 사이트
https://easings.net/
https://cubic-bezier.com/*/


/*transform: 형태를 변형 시키는 기능을 가지고 있다.
    x,y,z축 모두 변형이 가능 (하나씩줄수있고 3d로도 가능)
    translate() | rotate(deg) | skew(deg) | scale(1)
    rotate 기본축이 Z축이댜...
    scale 1 = 100%
-------------
  transform-orgin: 형태를 변형시킬때의 축을 설정하는것.;
  perspective: transform 사용된 부모요소에서 설정하는것으로
  원근법을 적용할지 체크;
    */

```

```css
100% 대충 만들기

 #sideBox:before,
 #sideBox::before {content: " ";
  display: block; position: absolute; z-index: -100;
  top: 0; left: 50%; margin-left: -50vw;
  width: 100vw; height: 100%; 
  background-color: inherit;}
```

```css
백그라운드
#footBox {position: relative;
  width: 100%; height: 110px;
  padding: 15px 40px 25px; 
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem; line-height: 120%;
  font-weight: normal;}
  #footBox:before{content: " "; display: block;
  position: absolute; top:0; left: 0;
  z-index: 100;
  width: 100%; border-top: 1px solid #999;}
/*background-size:cover, contain, size직접주기*/
```

#### 그린컴퓨터 레이아웃

```css
@charset "UTF-8";
/*gcass_result.css*/

#wrap {width: 980px; height: 850px;}
.temp {position: relative; width: 100%; height: auto; padding-top: 30px;}
.temp:after,
.temp::after {content: " "; display: block; clear: both;}
/* headBox======================== */
#headBox {float: left; width: 250px; height: 710px;
  padding: 50px 50px 100px 20px; box-sizing: border-box; background-color: #777;}
#headBox>h1 {width: 100%; height: 110px;}
 h1>a {/*display: block; width: 100%; height: 100%;*/
 background-image: url(../../img/gcass_logo.png);
 background-repeat: no-repeat; background-position: 50% 50%;}
 /*h1>a>span CLASS HIDDEN 처리*/

 #gnb{width: 100%; height: auto; margin-top: 35px;}
 #gnb>ul{width: 100%; height: auto;}
 #gnb>ul>li{width: 100%; height: 40px; margin-bottom: 24px;}
 #gnb>ul>li:nth-last-child(2){margin-bottom: 10px;}
 #gnb>ul>li:last-child{height: 112px; margin-bottom: 0;}
 #gnb>ul>li>a{/*display: block; width: 100%; height: 100%;*/
  background-image: url(../../img/gnb.png);
  background-repeat: no-repeat; background-position-x: 10px}
 #gnb>ul>li>a:hover,
 #gnb>ul>li>a:focus{background-image: url('../../img/gnb_on.png'); outline: none;}
 #gnb>ul>li:nth-child(1)>a {background-position-y: 2px;}
 #gnb>ul>li:nth-child(2)>a {background-position-y: -62px;}
 #gnb>ul>li:nth-child(3)>a {background-position-y: -124px;}
 #gnb>ul>li:nth-child(4)>a {background-position-y: -186px;}
 #gnb>ul>li:nth-child(5)>a {background-position-y: -248px;}
 #gnb>ul>li:nth-child(6)>a {background-position-y: -293px;}
 /*#gnb>ul>li>a>span{} CLASS HIDDEN처리*/
/* viewBox======================== */
#viewBox {float: right; width: 730px; height: 710px;
  padding: 50px; box-sizing: border-box; background-color: #adadad;
  background-image: url(../../img/view_pattern.png);
  background-repeat: repeat-x; background-position: 0 -10px;}
 .view_link {float: right; width: 610px; height: 595px;}
 .view_link>a {/*display: block; width: 100%; height: 100%;*/ position: relative;}
 .com_img {position: absolute; bottom: 0; left: 0; 
  width: 330px; height: 520px; background-image: url(../../img/com_img.png);
  background-repeat: no-repeat; background-position: 50% 50%;
  transition: all 400ms ease;}
 .view_link>a:hover .com_img{left: 10px; bottom: -100px;
  transform: rotate(360deg) scale(0.5);}
  /*transition-property: all; 
  어떤속성을 줄거니? all / left
  transition-duration: ; 시간
  transition-timing-function 시간의 따른 함수
- linear (동일한 속성) 
- ease (점점 빠르게갔다가 점점 느리게/ 자연스럽게)
- ease-in
- ease-out
- ease-in-out (들어가는 속도와 나가는 속도가 같다)
  transition-delay: 500ms 지연 (1초);}.*/
/*transition, animation, js-animate 기능에서
시간에 따른 흐름의 형태 파악하는 사이트
https://easings.net/
https://cubic-bezier.com/*/
 .text_img {float: right; width: 353px; height: 554px;
  background-image: url(../../img/text_img.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;}
/* sideBox===========================*/
#sideBox {position:absolute; top: 0; left: 0; 
  width: 100%; height: 30px; background-color: #888;}
  
  /*100%로 대충 만들기 ..*/
 #sideBox:before,
 #sideBox::before {content: " ";
  display: block; position: absolute; z-index: -100;
  top: 0; left: 50%; margin-left: -50vw;
  width: 100vw; height: 100%; background-color: inherit;}

 .lnb {float: right; width: 435px; height: 100%;}
 .lnb>li {float: left; width: 96px; height: 100%;
  margin: auto; background-color: #acc;
  background-image: url("../../img/subBox.png");
  background-position-y:0 ; background-repeat: no-repeat;}
 .lnb>li:last-child {width: 243px;}
 /*.lnb>li>a {display: block; width: 100%; height: 100%;
  background-image: url("../../img/subBox.png");
  background-position-y:0; background-repeat: no-repeat;}*/
 .lnb>li>a{display:block; width: 90%; height: 100%;}
 .lnb>li:nth-child(2){background-position-x:-96px; }
 .lnb>li:nth-child(3){background-position-x: 100%;}

 .lnb>li>a:hover,
 .lnb>li>a:focus {margin:auto;}
 /*.lnb>li>a>span CLASS HIDDEN 처리*/

/*footBox======================*/
#footBox {position: relative;
  width: 100%; height: 110px;
  padding: 15px 40px 25px; box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem; line-height: 120%; font-weight: normal;}
  #footBox:before{content: " "; display: block;
  position: absolute; top:0; left: 0; z-index: 100;
  width: 100%; border-top: 1px solid #999;}
#footBox>h2 {float: left; width: 72px; height: 50px;
  margin-right: 46px; background-image: url(../../img/footer_logo.png);
  background-repeat: no-repeat; background-position: 50% 50%;}
 .info {float: left; width: 70px; height: 50px;
  margin-right: 26px; padding-top: 15px; box-sizing: border-box;}
 .info>li{float: left; width: 45%; height: 100%;}
 .info>li:last-child{float: right;}
 .info>li>a{display: block; width: 100%; height: 100%;
  background-image: url("../../img/location_and_sns.png");
  background-position: 3px 0; background-repeat: no-repeat; background-size: auto 100%;}
 .info>li:nth-child(1)>a{}
 .info>li:nth-child(2)>a{background-position: 100% 0;}

 .info_company {float: left; width: 340px; height: 50px; padding-top: 10px;
  box-sizing: border-box;}
 .info_company>p{line-height: 20px; font-size: 1rem;}

 .family_area {position: relative; float: right;
  width: 300px; height: 150px; margin-top: -66px;}
 .family_area>dl{width: 100%; height: auto; font-size: 1rem; text-indent: 1rem;}
 .family_area>dl:after,
 .family_area>dl::after {content: " "; display: block; width: 0; height: 0; clear: both;}
 .family_area>dl>dt{position: relative; float: left; width: 96px; height: 50px;
     background-color: #555; color: #fff; letter-spacing: -0.1rem;}
 .family_area>dl>dd{position: relative; float: left; width: 204px; height: 50px; 
     background-color: #fff30d; color: #555;}
 .family_area>dl>dt:nth-of-type(1),
 .family_area>dl>dd:nth-of-type(1) {height: 51px;}

 .family_area>dl>dt:after,
 .family_area>dl>dt::after{content: "\f0da"; 
  display: block; position: absolute; top: 0; bottom: 0; margin: auto; right: 5px;
  width: 12px; height: 12px; color: #fff; font-family: "Font Awesome 5 Free";
  font-weight: 900;  text-indent: 0.2rem; font-size: 1rem;
/* background-image: url(../../img/family_arrow.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;*/}

 .family_area>dl>dd>a {display: block; width: 100%; height: 100%;}
 .family_area dl span {display: block; position: absolute; top: 50%; left: 0;
     transform: translateY(-50%); width: 100%; height: auto; text-transform: uppercase;}
 .family_area>hr{z-index: -1}
 .family_area>p{width: 100%; height: 20px; margin-top: 5px; text-align: right;}

/*transform: 형태를 변형 시키는 기능을 가지고 있다.
    x,y,z축 모두 변형이 가능 (하나씩줄수있고 3d로도 가능)
    translate() | rotate(deg) | skew(deg) | scale(1)
    rotate 기본축이 Z축이댜...
    scale 1 = 100%
-------------
  transform-orgin: 형태를 변형시킬때의 축을 설정하는것.;
  perspective: transform 사용된 부모요소에서 설정하는것으로
  원근법을 적용할지 체크; */
```

