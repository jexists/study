import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



export interface registered {
	name: string,
	level: string,
	tel: string
}

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})

export class AngularBasicComponent implements OnInit {

  // @Input() isSelected: boolean = true; 

  @Output() greeting = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  // onClick(){
  //   this.isSelected = !this.isSelected;
  //   console.log(this.isSelected);
    
  // } => courses.component로 이동

  onChildClick(){
    // console.log('자식');
    this.greeting.emit({
      name: "superman",
      level: "beginner",
      tel: "010-1245-1233"
    });
    //이벤트를 보낼수있고 여러가지로 보낼수 있음
    // console.log(this.greeting);
  }
}
