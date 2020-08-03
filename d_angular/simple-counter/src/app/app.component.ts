import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curVal: number = 0;
  manualVal: number = 0;
  static LIMIT_CNT = 100;

  myName: string = "angular";

  colorByValue() {
    if (this.curVal > 0) {
      return 'green';
    }else if (this.curVal < 0) {
      return 'red';
    }else{
      return 'grey';
    }
  }

  inc() {
    const tempVal = this.curVal + 1;
    if (this.checkLimitCnt(tempVal)){
      this.curVal = tempVal;
    }
  }

  dec() {
    const tempVal = this.curVal - 1;
    if (this.checkLimitCnt(tempVal)){
      this.curVal = tempVal;
    }
  }

  setValueForcibly() {
    if (this.checkLimitCnt(this.manualVal)){
      this.curVal = this.manualVal;
      this.manualVal = 0;
    }
  }

  checkLimitCnt(val) {
    if (Math.abs(val) < AppComponent.LIMIT_CNT){
      return true;
    }
    const target = val > 0 ? '증가' : '감소';
    alert(`더 이상 ${target}시킬수 없습니다.`);
    return false;
  }
}
