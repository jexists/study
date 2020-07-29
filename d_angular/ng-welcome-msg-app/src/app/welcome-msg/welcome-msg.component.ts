import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent {

  constructor() { }

  userName = "";
  private valid = false;

  onChange() {
    this.valid = this.userName.length > 0;
  }


}
