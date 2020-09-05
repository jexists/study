import { Component, OnInit } from '@angular/core';

declare var naver: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    var map = new naver.maps.Map('map', mapOptions);

    this.mapTest();
  }

  mapTest() {
    
  }
}
