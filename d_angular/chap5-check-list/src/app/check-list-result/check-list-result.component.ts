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
    const buttonElem = <HTMLElement>document.querySelector('.btn');
    console.log(buttonElem);
    
    if(buttonElem){
      buttonElem.addEventListener('click',() => this.collectCheckedResult());
    }
  }

  ngOnInit(): void {
  }

  private initResult() {
    this.checkedCnt = 0;
    this.checkedResult = [];
  }
  private collectCheckedResult() {
    console.log('btn clicked');
    
    this.initResult();
    const spanElems = document.querySelectorAll('span');
    for (let i = 0; i < spanElems.length; i++) {
      const spanElem = spanElems.item(i);
      // console.log(spanElem);

      const checkboxElem = spanElem.querySelector('input');
      if (checkboxElem.checked) {
        this.checkedResult.push(spanElem.querySelector('label').innerText);
      }
    }
    this.checkedCnt = this.checkedResult.length;
  }
}
