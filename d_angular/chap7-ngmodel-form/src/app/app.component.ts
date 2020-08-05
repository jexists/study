import { Component, ViewChild, OnInit, } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myData: any;
  @ViewChild('myModel', {static: true}) myNgModel: NgModel;
  // @ViewChild('myModel') myNgModel;
  validResult: boolean;

  ngOnInit() {
    this.myNgModel.valueChanges.subscribe(v => console.log(`value: ${v}`));
    this.myNgModel.statusChanges.subscribe(s => console.log(`status: ${s}`));
  }

  checkValid() {
    this.validResult = this.myNgModel.valid;
  }
}
