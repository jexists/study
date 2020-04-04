import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent implements OnInit {

  isSelected: boolean = true; 
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.isSelected
  }

}
