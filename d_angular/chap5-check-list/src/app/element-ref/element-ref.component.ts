import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit {

  items: any[];
  @ViewChildren('listItems') itemElems: QueryList<ElementRef>
  // elementRef:ElementRef;
  logs: number[];
  
  constructor() {
    this.logs = [];
  }
  
  leaveKeyLog(evt, num: number) {
    if(evt.keyCode === 13) {
      this.logs.push(num);
      evt.target.value = '';
    }
  }

  ngOnInit(): void {

  }



}
