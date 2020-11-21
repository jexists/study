import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, SimpleChanges, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit() {
    console.log(this.element.type);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck() { console.log('ngOnChanges'); }
  ngAfterContentInit() { console.log('ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
