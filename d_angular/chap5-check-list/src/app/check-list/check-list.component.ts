import { Component, OnInit } from '@angular/core';

import { CheckListDataService } from './check-list-data.service';
import { CheckItem } from './check-item';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  // checkList: string[];
  // checkedResult: boolean[] = [];
  // checkedResultData: string[];
  

  INIT_TOTAL_CNT: number = 4;
  checkList: CheckItem[] = [];
  curCheckedItem: CheckItem;

  constructor(
    public checkListDataService: CheckListDataService,
    ) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
    // this.checkList = [
    //   'check one',
    //   'check two',
    //   'check three',
    //   'check four',
    // ];
    // this.checkList.forEach(() => this.checkedResult.push(false));
  }

  ngOnInit() { }
  
  onChangeCnt(op: string) {
    this.checkListDataService.changeTotalCntByOp(op);
  }

  onChecked(isChecked, checkedItem: CheckItem) {
    checkedItem.isChecked = isChecked
    this.curCheckedItem = checkedItem;
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx) {
    this.checkListDataService.unCheckItem(idx);
  }


  // extractCheckedResult() {
  //   this.checkedResultData = [];
  //   this.checkedResult.forEach((isChecked, idx) => {
  //     if (isChecked) {
  //       this.checkedResultData.push(this.checkList[idx]);
  //       // console.log(this.checkedResultData);
  //     }
  //   });
  // }

  // removeCheckedItem(removeItem) {
  //   this.checkedResult.forEach((isChecked, _id) => {
  //     if (isChecked && this.checkList[_id] === removeItem) {
  //       this.checkedResult[_id] = false;
  //       this.extractCheckedResult();
  //     }
  //   });
  // }
  
}
