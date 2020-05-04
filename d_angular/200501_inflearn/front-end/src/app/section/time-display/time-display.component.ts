import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: number;


  // time: number = "00:00.00";
  minTime: any = 0;
  secTime: any = 0;
  msTime: any = 0;
  zeroText: string = '0';
  // minTime: number = 0;
  // secTime: number = 0;
  // msTime: number = 0;
  // zeroText: string = '0';

  msTimeInterval;
  secTimeInterval;
  minTimeInterval;

  constructor() {
    // setInterval(() => {
    //   this.test++;
    // },1000)
    // console.log(this.inputData);
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    // if (this.msTime < 10) {
    //   this.msTime = "00" + 0;
    // }else if (this.msTime <100) {
    //   this.msTime = "0" + 0;
    // }
    
    if (this.msTime <100) {
      this.msTime = "0" + 0;
    }
    
    if (this.secTime < 10) {
      this.secTime = "0" + 0;
    }

    if (this.minTime < 10) {
      this.minTime = "0" + 0;
    }
  }

  timeStart(): void {
    this.msStart();
    this.secStart();
    this.minStart();
  }

  msStart(): void {
    this.msTimeInterval = setInterval(() => {
        this.msTime++;
        if (this.msTime < 10) {
          this.msTime = this.zeroText + this.msTime;
        }
        // if (this.msTime < 10) {
        //   this.msTime + '0'
        // }
        // if (this.msTime < 10) {
        //   this.msTime = this.zeroText + this.zeroText + this.msTime;
        // } else if (this.msTime < 100) {
        //   this.msTime = this.zeroText + this.msTime;
        // }
      },10);
  }

  secStart(): void {
    this.secTimeInterval = setInterval(() => {
      this.secTime++;
      this.msTime = "0" + 0;
      if (this.secTime < 10) {
        this.secTime = this.zeroText + this.secTime
      }
    },1000);
  }
  minStart(): void {
    this.minTimeInterval = setInterval(() => {
      this.secTime = "0" + 0;
      this.msTime = "0" + 0;
      this.minTime++;
      if (this.minTime < 10) {
        this.minTime = this.zeroText + this.minTime
      }
    },60000);
  }

  timeStop(): void {
    clearInterval(this.msTimeInterval);
    clearInterval(this.secTimeInterval);
    clearInterval(this.minTimeInterval);
  }

  timeReset(): void {
    this.timeStop();
    this.msTime = "0" + 0;
    this.secTime = "0" + 0;
    this.minTime = "0" + 0;
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   for (let propName in changes) {
  //     if (propName = 'inputData' &&  changes[propName].currentValue == 'start') {
  //       this.timeStart();
  //     }
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName = 'inputData') {
        switch(changes[propName].currentValue) {
          case 'start': this.timeStart();
          break;
          case 'stop': this.timeStop();
          break;
          case 'reset': this.timeReset();
          break;
        }
      }
    }
  }

}
