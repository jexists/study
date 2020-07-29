import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  userName = "";
  private valid = false;
  private static Check_Keyup_Wait_Sec = 5000;

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      alert('이름 입력');
    };
    setTimeout(checkTouchedFn, AppComponent.Check_Keyup_Wait_Sec);
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }

  setName(name) {
    this.userName = name;
  }
}
