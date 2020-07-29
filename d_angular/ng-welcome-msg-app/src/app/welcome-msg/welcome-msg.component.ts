import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent {
  welcomeMsg: string;

  constructor(
    public i18nSupporter: I18nSupportService, 
  ) { }

  userName = "";
  private valid = false;

  onChange() {
    this.valid = this.userName.length > 0;
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }


}
