import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: number;


  // time: number = "00:00.00";
  minTime: number = 0;
  secTime: number = 0;
  msTime: number = 0;


  timeInterval;

  constructor() {
    // setInterval(() => {
    //   this.test++;
    // },1000)
    console.log(this.inputData);
  }

  ngOnInit(): void {
  }

  timeStart(): void {
    this.timeInterval = setInterval(() => {
        // this.test++;
        this.msTime++
      },10)
    // if (this.msTime < 10)
    // {
    //   this.msTime = 0;
    //   this.secTime++;
    // }

    // for () {

    // }
  }

  timeStop(): void {
    clearInterval(this.timeInterval)
  }

  timeReset(): void {
    this.timeStop();
    this.msTime = 0;
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
