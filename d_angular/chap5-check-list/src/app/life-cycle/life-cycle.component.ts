import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnDestroy {

  @Input() exContent: string;
  
  constructor() { 
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }
  
  ngOnInit() {
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }
  
  ngOnDestroy() {
    alert('will be destoryed...');
  }
  
  private chkExistence(val) {
    return val !== undefined;
  }
}
