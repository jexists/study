import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss']
})
export class CheckListResultComponent implements OnInit {

  
  _checkedData: string[];
  checkedCnt: number = 0;

  @Output() onSelectedToRemoveItem = new EventEmitter<string>();

  @Input() set checkedResult(checkedResult: string[]) {
    // console.log(checkedResult);
    
    if(!checkedResult) {
      return;
    }
    this._checkedData = checkedResult;
    this.checkedCnt = this._checkedData.length;
  }

  constructor() {
  }


  ngOnInit(): void {
  }

  removeItem(i){
    this.onSelectedToRemoveItem.emit(this._checkedData[i]);
  }
 
  // private initResult() {
  //   this.checkedCnt = 0;
  //   this.checkedResult = [];
  // }
  // private collectCheckedResult() {
  //   this.initResult();
  //   const spanElems = document.querySelectorAll('span');
  //   for (let i = 0; i < spanElems.length; i++) {
  //     const spanElem = spanElems.item(i);
  //     // console.log(spanElem);

  //     const checkboxElem = spanElem.querySelector('input');
  //     if (checkboxElem.checked) {
  //       this.checkedResult.push(spanElem.querySelector('label').innerText);
  //     }
  //   }
  //   this.checkedCnt = this.checkedResult.length;
  // }

}
