import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // RxJS: OPERATORS

    //Creation Operator = of
    // const observable = of ([1,2,3]);

    // observable.subscribe((x) => {
    //   console.log(x);
    // })
    
    // const obs = from([1, 2, 3])
    // obs.subscribe((x) => {
    //   console.log(x);
    // });

    // const obs = interval(1000);
    // obs.subscribe((x) => {
    //   console.log(x);
    // });


    const button = document.querySelector('button');

    fromEvent(button, 'click').subscribe((e: MouseEvent) => {
      console.log(e);
    });
  }

}
