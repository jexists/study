import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{title}}</h2> //interpolation (o)
    <h2 [textContent]="register"></h2> //property binding

    <img src="{{imgUrl}}"/> //interpolation
    <img [src]="imgUrl"/> //property binding (o)
    <img src="../img/img.jpg"/>
    <br />
    
    <div (click)="onOuter($event)">
      <h2>Outer Block</h2>
      <div (click)="onInner($event)"> 
        <h3>Inner Block</h3>
        <button (click)="onButton($event)">EVENT</button>
        <p>안에서부터 밖으로 이벤트실행 - 3개 실행</p>
        <p>$event.stopPropagation() - 버튼이벤트 하나만 실행</p>
      </div>
    </div>

    <input #name (keyup.enter)="onKeyUp(name.value)" />
    <p> {{email}} </p>
    <input [value]="email" (keyup.enter)="email = $event.target.value"/>
    <p> {{title}} </p>
    <input [(ngModel)]="title" />
    
    <p>
      {{ course.title | uppercase | lowercase}} <br />
      {{ course.number | number}} <br />
      {{ course.rating | number: '1.2-2'}} <br />
      {{ course.price | currency:'KRW'}} <br />
      {{ course.date |date:'shortDate'}} <br />
    </p>
    <!-- <p> {{text | slice: '5' }} </p> -->
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
  email: string = "juae@naver.com";
  text = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, voluptate.
  `;
  title: string = "angular";
  register: string = "juae";
  imgUrl: string = "../img/img.jpg";
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

  onKeyUp(name){
    console.log(name); //event filtering
  }

}
