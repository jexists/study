# Angular 앵귤러

앵귤러 : html, css 브라우저가 읽을수있게 패키징
google 주관하는 오픈 소스 프레임워크
AngularJs -> 새롭게 재구축된 프레임워크 (Angular 2 이후 버전)
ECMAScript 5/6버전, JavaScript, Dart, TypeScript

1. **angular** - 프레임워크

   > google (탄탄하지만 무겁고 배우기 힘듬)
   > typescript

2. **react** - 라이브러리

   > facebook (커뮤니티)

3. **vue** - 라이브러리

   > Evan You

---

### 설치하기

[angular 한국](https://angular.kr/docs) & [angular 영어](https://angular.io/start)

```node.js
$ npm install -g @angular/cli
//앵귤러 설치

$ npm install -g typescript
//타입스크립트 설치
```

```
$ ng version
//앵귤러 버전
```

---

#### 폴더만들기 (수정필요)

```
$ ng new -help
//옵션 설명 (이러한 폴더들이 만들어진다고 알림)

$ng new project_name --dry-run
$ng new project_name -d
//package.json

$ng new project_name -d --skip-install 
//설치X package.json 위주로 설치

$ng new project_name -d --skip-install --routing
//app-routing.module.ts 기반으로 설치
```

---

#### 실행하기 (수정필요)

```
$ng serve -o
//기본 웹브라우져로 실행
```



---

#### 앵귤러 구조

```
src - app
 app.component.html
 app.component.ts
 app.component.css
```



src - app -app.component.html





---

### 데이터 바인딩 (단방향&양방향)

1. 인터폴레이션 interpolation {{expression}}

   > 컴포넌트 클래스 > 템플릿

2. 프로퍼티 바인딩 property [property]="expression"

   > 컴포넌트 클래스 > 템플릿

3. 어트리뷰트 바인딩 attribute [attr.atrribute-name]="expression"

   > 컴포넌트 클래스 > 템플릿

4. 클래스 바인딩 class [class.class-name]="expression"

   > 컴포넌트 클래스 > 템플릿

5. 스타일 바인딩 style [style.style-name]="expression"

   > 컴포넌트 클래스 > 템플릿

6. 이벤트 바인딩 event (event)="statement"

   >컴포넌트 클래스 < 템플릿

7. 양방향 데이터 바인딩 [(ngModel)]="property"

   > 컴포넌트 클래스 <> 템플릿
   > 프로펄티&이벤트 바인딩 동시 (html에서 ts파일 관여)

[data binding reference](https://poiemaweb.com/angular-component-data-binding)



### 이벤트 

|   이벤트   | action                                 |
| :--------: | -------------------------------------- |
|   click    | 클릭                                   |
|  dblclick  | 더블 클릭                              |
|    blur    | focus를 잃었을떄                       |
|   focus    | focus 되었을때                         |
|    copy    | 값이 복사 되었을때                     |
|   paste    | 값을 붙혀넣었을때                      |
|    cut     | 값을 잘라냈을때                        |
|  keydown   | 키보드 키를 눌러졌을때                 |
|   keyup    | 키보드 키를 눌렀다가 뗐을때            |
|  keypress  | 키보드 키를 눌렀을때                   |
| mousedown  | 마우스 클릭 되었을때                   |
|  mouseup   | 마우스 클릭 하고 뗐을때                |
| mouseenter | 마우스가 해당 Object 위로 올라갔을때   |
| mouseleave | 마우스가 해당 Object 밖으로 나갔을때   |
| mousemove  | 마우스가 해당 Object 위에서 움직였을때 |
| mouseover  | 마우스가 해당                          |