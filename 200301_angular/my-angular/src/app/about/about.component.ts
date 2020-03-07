import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  greeting = "이름을 적어주세요";
  hello = "something";
  hell01 = "뭐가나올까";

  constructor() { }

  ngOnInit(): void {
  }
  button() {
    console.log('어바웃이댜 ㅋㅋ')
  }

}
