import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.scss']
})
export class CheckListResultComponent implements OnInit {

  checkedCnt: number;
  checkedResult: string[];

  constructor() { 
    this.initResult();
  }

  ngOnInit(): void {
  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }
}
