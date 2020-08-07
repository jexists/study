
import { Component } from '@angular/core';

declare var naver: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naver-map';


  constructor() {

    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    
    var map = new naver.maps.Map('map', mapOptions);
  }
}
