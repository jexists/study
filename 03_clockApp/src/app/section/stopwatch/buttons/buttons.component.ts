import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  count: number = 0;

  // @Output() clickEvent = new EventEmitter();
  @Output() clickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // onStart($event:MouseEvent): void { 
  //   // console.log($event);
  //   // this.count++;
  //   this.clickEvent.emit('start');
  // }
  // onStop($event): void {
  //   console.log($event);
  //   this.clickEvent.emit('stop');
  // }
  
  // onReset($event): void {
  //   this.clickEvent.emit('reset');
  // }

  
  onClick(command: string): void { 
    this.clickEvent.emit(command);
  }
}
