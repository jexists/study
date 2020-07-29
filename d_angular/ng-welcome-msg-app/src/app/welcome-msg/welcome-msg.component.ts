import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent implements AfterViewInit {

  constructor() { }

  userName = "";
  private valid = false;
  private static Check_Keyup_Wait_Sec = 5000;

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      console.log('이름입력');
    };
    setTimeout(checkTouchedFn, WelcomeMsgComponent.Check_Keyup_Wait_Sec);
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }

  setName(name) {
    this.userName = name;
  }


}
