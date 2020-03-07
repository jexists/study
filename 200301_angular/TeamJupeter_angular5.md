VS Code 플로그인 (ctrl + shift + p)

> Angular Language Service
>
> Angular Snippets

VS Code 열기

```shell
$code 	//VS Code 열기
$code . //파일포함 열기
```



---

앵귤러 설치하기

```shell
$npm install -g @angular/cli
```

앵귤러 처음 폴더 만들기

```shell
$ng new 폴더이름 (html,css/scss,ts)
```

APP

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

컴포넌트 만들기

```shell
$ng generate component 폴더이름
$ng g c 폴더이름
```

---

angular

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



```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: '<h1> 회사 로고 </h1>',  //inline (외부 css X)
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
```

```typescript
templateUrl: './about.component.html',
    //파일 위치 / 싱글따음표 ('')
template: '<h1> 회사 로고 </h1>',  //inline (외부 css X)
    //template 태그 / 두줄 이상 쓸 경우 빽쿼터(``)를 사용
```

interpolation {{}}

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

```typescript
//import - 다른 모듈, 파일을 가져온다. (.ts 생략가능)

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//@앵귤러 프레임워크에서 가져온다.

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
//경로(./)

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
//angular/core에서 component를 가져오

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

