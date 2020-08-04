import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  isChecked: boolean;

  myOpenState: string = 'let it be';
  private _internalState: string = 'not authroized';

  constructor() { 
    this.isChecked = false;
  }

  ngOnInit(): void {
  }

  foo() {
    console.log('foo');
  }

  private bar() {
    console.log('bar');
    
  }

}
