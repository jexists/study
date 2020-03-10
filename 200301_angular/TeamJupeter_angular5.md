# Angular

#### VS Code 플로그인 (ctrl + shift + p)

> Angular Language Service
>
> Angular Snippets
>
> AutoImport

#### VS Code 열기

```shell
$code 	//VS Code 열기
$code . //파일포함 열기
```

---

#### 앵귤러 설치하기s

```shell
$npm install -g @angular/cli
```

#### 앵귤러 처음 폴더 만들기

```shell
$ng new 폴더이름 (html,css/scss,ts)
```

---

#### 앵귤러 구조

**APP**

>component.html
>
>component.css
>
>component.spect.ts
>
>component.ts
>
>module.ts

>index.html - 시각
>
>main.ts - 기능
>
>style.css

---

#### 컴포넌트 만들기

```shell
$ng generate component 폴더이름
$ng g c 폴더이름
```

---

angular 컴포넌트 기본 세팅

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
```

기본 세팅 세부설명

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: '<h1> 회사 로고 </h1>',  //inline (외부 css X)
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 { }

  ngOnInit(): void {
  }
}
```



#### @component 데코레이터

> 컴포넌트임을 알리는 표시
> 컴포넌트를 구성하는 정보를 전달할 때 쓰는 통로
> @ (데코레이터)로 시작
> 타입스크립트 클래스를 컴포넌트로 인지할 수 있도록 하는 역할
> 설정 정보, 메타데이터 받는 것

#### 메타데이터

> 총 18가지 종류
> 컴포넌트를 통하여 앵귤러에 전달하는 컴포넌트를 구성하는 정보

#### 템플릿 정보

>템플릿 코드를 인라인으로 메타데이터 안에 직접 기술하는 방법
>
>selector - 
>
>template / templateUrl - 컴포넌트의 뷰를 구성하는 정보
>
>style / styleUrls

```
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@Component({
  selector: 'about',
  template: '<h1> {{title}} </h1>',
  style:  
})
```



```typescript
templateUrl: './about.component.html',
    //파일 위치 / 싱글따음표 ('')
template: '<h1> 회사 로고 </h1>',  //inline (외부 css X)
    //template 태그 / 두줄 이상 쓸 경우 빽쿼터(``)를 사용
```

#### interpolation {{}}

- html, ts 파일 소통
- 태그 / function 호출 가능

```
template: '<h1> {{title}} </h1>', 
```

```
template: '<h2> {{"title " + title}} </h2> '
```

App - src

index.html - 처음으로 화면 보여주는 곳

```
<app-root> </app-root>
// angular tag: 역활과 기능을 만들수 있음
```

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

main.ts - 처음으로 나타는것 (눈에 안보임)

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

app.module.ts

-component를 만들때 inport해야한다 (출석체크)

```typescript
//import - 다른 모듈, 파일을 가져온다. (.ts 생략가능)

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//@앵귤러 프레임워크에서 가져온다.

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
//경로(./)

@NgModule({
  declarations: [ //컴포넌트
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [], //서비스, 공급
  bootstrap: [AppComponent]
})
//bootstrapModule을 app.Module에서 가져온다.

export class AppModule { }
//export를 해야 import가 가능하다.
//폴더이름: app.module.ts -> AppModule (대문자/카멜케이스)
```

Decorator (@)

- ts의 특정한 기능
- 특수한 function(동작) - 파라미터({}), 오브젝트

```typescript
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```



> import - 가져오기
>
> @component(decorator) - 사용하기
>
> export  / class - 보내기



```typescript
import { Component } from '@angular/core';
//angular/core에서 component를 가져오기

@Component({ //@component 데코레이트 
  //알규멘트는 3개의 프로펄티가 있다
  selector: 'app-root', //태그 명칭 (다른페이지에서 이 태그를 사용가능)
  templateUrl: './app.component.html', //태그 대신에 보여줄 화면
  styleUrls: ['./app.component.css'] //보이는 html의 디자인요소 (css/scss)
})
export class AppComponent {
  title = 'my-angular';
}
```

#### 1. 데이터바인딩

-컴포넌트와 뷰 사이에 연결고리

#### 1) 단방향바인딩

>**1-1삽입식 {{}} - interpolation**

-문자열로 변환

-중괄호{{}} 사용

```html
<div>{{ content }}</div> //content 속성 반영
<textarea>{{ getSomeText() }}</textarea> //getsomeText 메서드 실행결과 반영
<a href="{{ someLink + "?who=angular" }}">link</a> //someLink속성+?who=angular 반영
<p> 1 + myVal = {{ 1 + myVal }} </p> //1+myVal속성 반영
```

>**1-2프로퍼티바인딩 []**

-문자 그대로 컴포넌트에서 DOM 프로퍼티로 값 바인딩

-대괄호[]사용

-[DOM 프로퍼티]="템플릿표현식"

```html
 <p [textContent]="contents"></p> //프로퍼티에 컴포넌트 contents속성 반영
 <img [src]="./img.jpg" [width]="10*20"> //넓이 프로퍼티에 연산 결과 반영
// 아래 동일한 코드
 <img [src]="imgUrl" width="10"> 
//src프로퍼티에 컴포넌트 URL 반영 /결과 DOM의 프로퍼티 그대로 바인딩
 <img src="{{imgUrl}}" width="10"> 
//src프로퍼티에 컴포넌트 URL 반영 /문자열로 치환
```

>**1-3이벤트바인딩()**

-이벤트를 처리할 로직 바인딩

-(이벤트대상)="템플릿 문장"

-세미콜론(;)을 사용해서 여러 할당문 작성 가능

```html
 <button type="button" (click)="confirm()">확인</button>
 <div (mousemove)="printPosition($event)"></div>
 <input type="text" (keyup)="myStr = $event.target.value"/>
 <button type="button" (click)="clicked = true; callEvent($event)">확인</button>
```

#### 양방향바인딩

-뷰와 컴포넌트의 상태 변화를 상호 간에 반영

-기본 양방향 바인딩 예제: FormsModule에서 제공하는 NgModel지시자

```html
// 태그
<p>about works!</p>

 <!-- 단방향 바인딩 (one way Binding) -->
 <!-- //단방향 - 삽입식 {{}} -->
<p>{{greeting}} 환영합니다</p> //onewayBinding
//ts에 입력한 데이터가 삽입식에 실행
greeting = "이름";

<!-- //단방향 - 이벤트바인딩 () -->
<button (click)="button()">버튼</button>
//버튼을 클릭할경우 ts에 입력된 buuton 함수 실행

<!-- //단방향 - 프로퍼티바인딩 [] -->

<!-- 양방향 바인디 (two way Binding): 내가 입력한 데이터가 ts로 가서 html으로 보여줌-->
<p>{{greeting}} 환영합니다</p>
<input type="text" [(ngModel)]="greeting"/>
//input에 입력하면 상단 p태그안에있는 {{greeting}}에 반영
```

#### 지시자 Directive

>*로 시작

구조지시자

-DOM 요소를 추가/삭제 등 DOM 트리를 동적으로 조작하여 화면의 구조를 변경할 때 사용하는 지시자

-NgIf, NgFor, NgSwitch

#### NgIf

-DOM을 조건에 따라 노출하거나 제거할 때 사용하는 지시자

-느낌표(!)를 사용해 부정/반대로 사용가능

-참과 거짓을 판결한다

-if( 내용 ) { 참이면 코드 수행 }else{ 거짓이면 코드 수행 }   비슷

```html
 hello = "greeting"; //ts 파일 내용 유
 bye = ""; //ts 파일 내용 무
 <p *ngIf="hello">hello 내용 유O => 반영 (이내용 화면표시)</p> 
 <p *ngIf="bye">bye 내용 무X => 미반영</p> 
 //부정 ! - 반대로
 hello = ""; //ts 파일 내용 무
 <p *ngIf="!hello">hello 내용 무X=> 반영</p> 
```

```html
<!-- *ngIf="변수유무"; else 템플릿이름 (else 입력 후 보여줄 템플렛 이름 적기)  -->
 <p *ngIf="isShow; else isHide"></p>
<!-- ng-template #템플릿이름-->
 <ng-template #isHide> isShow내용 무X => 아니면(else) ng-template 반영</ng-template>
```

#### NgFor

-*ngFor="let (배열 요소) of (반복할 배열)"

```typescript
fruit: string[] = ["apple", "banana", "cherry", "mango"];
```

```html
<!-- fruit array 개수 만큼 li 태그 생성 = 내용: fruit -->
<ul>
   <li *ngFor= "let item of fruit">fruit</li>
</ul>
[결과]
fruit
fruit
fruit
fruit

<!-- array 내용이 한줄에 다 나옴 //apple,banana,cherry,mango -->
<ul>
   <li *ngFor= "let item of fruit">{{ fruit }}</li>
</ul>
[결과]
apple,banana,cherry,mango
apple,banana,cherry,mango
apple,banana,cherry,mango
apple,banana,cherry,mango

<!-- array 한개씩 li태그 나옴 //apple //banana //cherry //mango -->
<ul>
   <li *ngFor= "let item of fruit">{{ item }}</li>
</ul>
[결과]
apple
banana
cherry
mango
```

```html
//ts파일
colors = [{name:"red"}, {name:"blue"}, {name:"white"}];
<ul>
   <li *ngFor= "let color of colors">{{ color.name }}</li>
</ul>
[결과]
red
blue
white
<ul>
   <li *ngFor= "let color of colors">{{ color | json }}</li>
</ul>
[결과]
{ "name": "red" }
{ "name": "blue" }
{ "name": "white" }
```

```html
반복할 때 인덱스가 필요한 경우 
let (변수명) = index
<ul>
   <li *ngFor= "let color of colors; let i = index">{{ i + 1 }} {{ color.name }}</li>
</ul>
[결과]
1 red
2 blue
3 white
```

모듈.ts - 논리적

### Service

-외부에서 정의된 의존성 주입(Dependency Injection) 대상이 되는 클래스

[역할]

-애플리케이션 관심사와 개별 컴포넌트 관심사 분리

> -컴포넌트에 공통적으로 쓰일 수 잇는 기능을 서비스로 개발 (컴포넌트: 독립적인 특성)
>
> -중복되는 코드를 서비스에 적어서 컴포넌트의 응집성 높여야 함

-컴포넌트 중간에서 데이터 중개자의 역할 수행

>컴포넌트 to 컴포넌트의 데이터 교환은 서비스를 통해 이루어 짐

-관심사 분리

```
$ng g service service_name
//serivce.ts & service.spec.ts 파일 생성
```

app.module.ts의 providers: [service 등록] & import { service } from "./경로"

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
//form input사용하기위해 import함

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //import해서 사용할려고
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

``` typescript
//heroes.service.ts
export class HeroService {
  Hero: string[] = ["슈퍼맨", "배트맨", "아이언맨"]
}
```

```typescript
//component.ts
import { HeroesService } from "./heroes.service";

export class AboutComponent implements OnInit {
  heroes;
  constructor( hero : HeroesService ) { 
      this.heroes = hero.Hero;
  }
  ngOnInit(): void {
  }
}
```

```html
//component.html
<ul>
    <li *ngFor= "let hero of heroes; let i = index">{{ i + 1 }} {{ hero }}</li>
 </ul>
```



Dependency Injection

singleton

#### interpolation & property biniding 차이

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{title}}</h2> //interpolation (o)
    <h2 [textContent]="register"></h2> //property binding
    <img src="{{imgUrl}}"/> //interpolation
    <img [src]="imgUrl"/> //property binding (o)
    <img src="../img/img.jpg"/>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string = "angular"
  register: string = "juae"
  constructor() { }

  ngOnInit(): void {
  }
}
```

#### 버튼 이벤트

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: ` 
    <div (click)="onOuter($event)">
      <h2>Outer Block</h2>
      <div (click)="onInner($event)"> 
        <h3>Inner Block</h3>
        <button (click)="onButton($event)">EVENT</button>
        <p>안에서부터 밖으로 이벤트실행 - 3개 실행</p>
        <p>$event.stopPropagation() - 버튼이벤트 하나만 실행</p>
      </div>
    </div>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  onButton($event) {
    //event bubble
    $event.stopPropagation() //버튼이벤트 하나만 실행
    console.log('버튼클릭', $event)
    // console.log($event);
  }
  onInner($event){
    console.log("inner", $event);
  }
  onOuter($event){
    console.log("outer", $event);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```

event filtering - 특정한 상황에서만 이벤트 발생

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup)="onKeyUp($event)" />
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   onKeyUp($event){
    //console.log($event);
    if ($event.keyCode == 13) {
      console.log($event); //event filtering
    }
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```

//위에랑 같은 코드인데 간단하게

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup.enter)="onKeyUp()" />
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  onKeyUp(){
    console.log("엔터클릭"); //event filtering
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```

#### input에 입력한 데이터 받기

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input (keyup.enter)="onKeyUp($event)" />
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  onKeyUp($event){
    console.log($event.target.value); 
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input #name (keyup.enter)="onKeyUp(name)" /> // = tag <input _ngcontent-jxl-c41>
	<input #name (keyup.enter)="onKeyUp(name.value)" /> //=  input value 값(o)
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  onKeyUp(name){
    console.log(name); 
  }
  constructor() { }
  ngOnInit(): void {
  }
}
```

양방향 바인딩 - [(ngModel)] X 

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
	<p> {{email}} </p>
    <input [value]="email" (keyup.enter)="email = $event.target.value"/>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  email: string = "juae@naver.com";
}
```

양방향 바인딩 - [(ngModel)] 사용

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <p> {{title}} </p>
    <input [(ngModel)]="title" />
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title: string = "angular";
}
```



---

Pipe 사용방식 (angular.io = pipe참고)

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <p>
{{ course.title }} <br /> //School
	{{ course.title | uppercase}} <br /> //SCHOOL대문자
	{{ course.title | uppercase | lowercase}} <br /> //school소문자
{{ course.number }} <br /> //49899
	{{ course.number | number}} <br /> //49,899 (1000자리 ,)
{{ course.rating }} <br /> //4.9512
	{{ course.rating | number: '1.2-2'}} <br /> //4.95 (1.2-2)
	{{ course.rating | number: '2.2-2'}} <br /> //04.95 (앞자리.min소수자리-max소수자리)
{{ course.price }} <br /> //20000
	{{ course.price | currency}} <br /> //$20,000.00 (기본:달라 & 소수2자리)
	{{ course.price | currency:'KRW'}} <br /> //₩20,000
{{ course.date }} <br /> //Thu Feb 01 2018 00:00:00 GMT+0900 (대한민국 표준시)
	{{ course.date |date:'shortDate'}} <br /> //2/1/18
    </p>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = {
    title: "School",
    number: 49899,
    rating: 4.9512,
    price: 20000,
    date: new Date(2018,1,1),
  }
}
```



25유투브