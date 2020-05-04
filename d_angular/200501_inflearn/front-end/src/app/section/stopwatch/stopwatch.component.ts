import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string ='20';
  constructor() { }

  ngOnInit(): void {
  }

  onButton(time: string):void {
    // console.log(time);
    this.present = time;
    
  }


}
