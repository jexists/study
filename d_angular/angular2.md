# **Angular 앵귤러**

앵귤러 : html, css 브라우저가 읽을수있게 패키징 google 주관하는 오픈 소스 프레임워크 AngularJs -> 새롭게 재구축된 프레임워크 (Angular 2 이후 버전) ECMAScript 5/6버전, JavaScript, Dart, TypeScript

1. angular

    \- 프레임워크

   - google (탄탄하지만 무겁고 배우기 힘듬)
   - typescript

2. react

    \- 라이브러리

   - facebook (커뮤니티)
   - 사용자 인터페이스 구현
   - MVC패턴에서 View에 해당하는 영역만 다룸
   - 다른 라이브러리/프레임워크 함께 사용 가능
   - 자체적인 virtual DOM 객체 생성 개발자가 브라우저 DOM 접근 최소화
   - JSX형식 사용 (XML과 비슷한 문법)

3. vue

    \- 라이브러리

   - Evan You

4. Ext JS

    \- 종합 프레임워크

   - Sencha

5. jQuery

    \- 라이브러리

   - DOM 객체 찾거나 조작하는 기능 제공

6. Bootstrap

    \- 라이브러리

   - Twitter (오픈소스 UI 컴포넌트)

------

### 프레임워크 vs 라이브러리

프레임워크

- 제공하는 설계 구조 사용

라이브러리

- 컴포넌트와 API를 중심 기능제공 /필요따라 맞춰서 사용

------

### **설치하기**

[angular 한국](https://angular.kr/docs) & [angular 영어](https://angular.io/start)

```
$ npm install -g @angular/cli
//앵귤러 설치
$ npm install -g typescript
//타입스크립트 설치

$ ng version
//앵귤러 버전
```

------

### **폴더만들기 (?)**

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

------

### **실행하기 (?)**

```
$ng serve -o
//기본 웹브라우져로 실행
```

------

### **앵귤러 구조**

```
src - app 
app.component.html 
app.component.ts 
app.component.css
```

src - app -app.component.html

------

### **데이터 바인딩 (단방향&양방향)**

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

   > 컴포넌트 클래스 < 템플릿

7. 양방향 데이터 바인딩 [(ngModel)]="property"

   > 컴포넌트 클래스 <> 템플릿 프로펄티&이벤트 바인딩 동시 (html에서 ts파일 관여)

[data binding reference](https://poiemaweb.com/angular-component-data-binding)

### **이벤트**

[Untitled](https://www.notion.so/428692f970cd478b81155c6db0140733)

### 첨부파일

------