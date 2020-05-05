import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: number;

  ms: any = 0;
  sec: any = 0;
  min: any = 0;

  timeInterval;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ng on changes');
    
    for (let propName in changes) {
      if (propName = 'inputData') {
      }
    }
  }
  
  ngOnInit(): void {
    // console.log('ng on init');
    this.formInit();
    
  }

  formInit(): void {
    // if (this.ms <= 9) {
    //   this.ms = '0' + 0;
    // }
    // if (this.sec <= 9) {
    //   this.sec = '0' + 0;
    // }
    // if (this.min <= 9) {
    //   this.min = '0' + 0
    // }
  }
  timeStart(): void {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      
      if (this.ms >= 100) {
        // if (this.ms <= 9) {
        //   this.ms = '0' + this.ms
        // }
        this.ms = 0;
        // this.ms = '0' + 0;
        this.sec++;
      }
      if (this.sec >= 60) {
        this.sec = 0;
        // this.sec = '0' + 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }
  

  timeStop(): void {
    clearInterval(this.timeInterval);
  }

  timeReset(): void {
    this.timeStop();
    this.ms = 0;
    // this.ms = '0' + 0;
    this.sec = 0;
    // this.sec = '0' + 0;
    this.min = 0;
    // this.min = '0' + 0;
  }


  

}
