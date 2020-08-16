import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.scss']
})
export class RxjsBasicComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // let button = document.querySelector('button');
    // button.addEventListener('click', (e) => console.log(e));

    // fromEvent(button, 'click').subscribe((e) => console.log(e))
    //(alias) fromEvent<Event>(target: FromEventTarget<Event>, eventName: string): Observable<Event> (+3 overloads)

    // let count: number = 0;
    // let rate: number = 1000;
    // let lastClick: number = Date.now() - rate;
    // let button = document.querySelector('button');
    // button.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(count++);
    //     lastClick = Date.now();
    //   }
    // });

    let button = document.querySelector('button');
    fromEvent(button, 'click')
      .pipe(throttleTime(1000))
      .subscribe((e) => console.log(e));
    //(alias) throttleTime<Event>(duration: number, scheduler?: SchedulerLike, config?: ThrottleConfig): MonoTypeOperatorFunction<Event>


  }

}
