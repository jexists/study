import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment/moment';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators'


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString: string;

  constructor(
    private router: Router,
  ) { 
    // setInterval(()=>{
    // },1000)
    
    // rxJs 사용
    interval(1000)
      .pipe(map(() => {
        return moment().format('YYYY-MM-DD  HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      })
  }

  ngOnInit(): void {
  }

  // https://momentjs.com/
  //install => yarn add moment
  //yard add rxjs
  getCurrentTime(): string {
     let result = moment().format('YYYY-MM-DD HH:mm:ss')
     return result;
  }




  goStopwatch(): void {
    this.router.navigateByUrl('/stopwatch');
  }
}
