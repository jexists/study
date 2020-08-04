import { Component, OnInit } from '@angular/core';

import { CheckListDataService } from './check-list-data.service';
import { CheckItem } from './check-item';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  checkList: string[];
  checkedResult: boolean[] = [];
  
  constructor(
    ) {
      this.checkList = [
        'check one',
        'check two',
        'check three',
        'check four',
      ];
      this.checkList.forEach(() => this.checkedResult.push(false));
  }

  ngOnInit() { }

  
}
