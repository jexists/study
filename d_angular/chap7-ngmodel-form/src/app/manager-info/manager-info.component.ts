import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.scss']
})
export class ManagerInfoComponent implements OnInit {

  @Input() idx: number;
  @Input() manager;
  
  constructor() { }

  ngOnInit(): void {
  }

}
