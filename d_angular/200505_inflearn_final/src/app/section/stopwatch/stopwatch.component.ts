import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string ='20';
  constructor(
    private router: Router,
    private pageToggle: PageToggleService
  ) { }

  ngOnInit(): void {
  }

  onButton(time: string):void {
    // console.log(time);
    this.present = time;
    
  }

  goClock(): void {
    // this.router.navigateByUrl('/clock');

    this.pageToggle.goPage('/clock');
  }

}
