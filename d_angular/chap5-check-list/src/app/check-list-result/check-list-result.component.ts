import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckItem } from '../check-list/check-item';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss']
})
export class CheckListResultComponent implements OnInit {

  
  // _checkedData: string[];
  _checkedData: CheckItem[];
  checkedCnt: number = 0;

  @Output() onSelectedToRemoveItem = new EventEmitter<number>();
  // @Output() onSelectedToRemoveItem = new EventEmitter<string>();

  // @Input() set checkedResult(checkedResult: string[]) {
  //   if(!checkedResult) {
  //     return;
  //   }
  //   this._checkedData = checkedResult;
  //   this.checkedCnt = this._checkedData.length;
  // }

  @Input() set checkItem(curItemEvent: CheckItem) {
    if (!curItemEvent) {
      return;
    }

    if (curItemEvent.isChecked) {
      this._checkedData.push(curItemEvent);
    } else {
      this._checkedData = this._checkedData.filter(val => val.idx !== curItemEvent.idx);
    }
    this.checkedCnt = this._checkedData.length;
  }

  constructor() {
    this._checkedData = [];
  }
  
  ngOnInit(): void {
    // console.log(this._checkedData);
    
  }

  // removeItem(i){
  //   this.onSelectedToRemoveItem.emit(this._checkedData[i]);
  // }
 
  onRemove(idx) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
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
