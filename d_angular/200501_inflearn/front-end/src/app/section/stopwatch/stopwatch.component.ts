import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    PageToggleService
  ]
})
export class StopwatchComponent implements OnInit {

  present: string ='20';
  constructor(
    private router: Router,
    public pageToggle: PageToggleService
  ) { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log('2ng on after init');
  }
  ngAfterContentChecked(): void {
    console.log('2ng on after content checked');
  }

  ngAfterViewInit(): void {
    console.log('2ng on after view init');
  }
  ngAfterViewChecked(): void {
    console.log('2ng on after view check');
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
