import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss']
})
export class TestParentComponent implements OnInit {
  
  checkListNums: number[];
  @ViewChildren(TestChildComponent) testChild: QueryList<TestChildComponent>;
  
  constructor() {
    this.checkListNums = [1, 2, 3];
  }
  
  ngOnInit(): void {}
  
  checkedAll() {
    this.testChild.map((comp) => comp.isChecked = true);
  }
  
  unCheckedAll() {
    this.testChild.map((comp) => comp.isChecked = false);
  }

}
