import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  greeting = "이름을 적어주세요";
  hello = "something";
  hell = "";
  hell01 = "뭐가나올까";
  hello1 = "";
  
  ngOnInit(): void {
  }

  button() {
    console.log('버튼클릭했다');
  }

}
