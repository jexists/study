import { Component, OnInit } from '@angular/core';
import { registered } from './angular-basic/angular-basic.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  ParentSelected: boolean = true;
  //Input => 태그의 attribute로 사용하겠다고 Input Decorate를 지정

  constructor() { }

  ngOnInit(): void {
  }
  // onClick(){
  //   this.ParentSelected = !this.ParentSelected;
    // console.log(this.ParentSelected);
    
  // }

  onGreeting(student: registered){
    //(greeting)="onGreeting($event)"에서 받은 이벤트 = student
    // console.log('부모');
    console.log(student);
    console.log(student.name);
    
    
  }
}
