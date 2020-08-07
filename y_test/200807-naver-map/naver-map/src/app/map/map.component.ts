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

  mapTest(): void {
    //그림위치
    var HOME_PATH = '.';

    //지도생성 옵션
    var cityhall = new naver.maps.LatLng(37.5666805, 126.9784147),
      map = new naver.maps.Map('map', {
        center: cityhall.destinationPoint(0, 500),
        zoom: 15
      }),
      marker = new naver.maps.Marker({
        map: map,
        position: cityhall
      });

    // min/max 줌 레벨
    // let zoom = document.querySelector("#min-max-zoom");
    // zoom.addEventListener('click',  onZoom($event));
    // onZoom($event): void {
    //   e.preventDefault();

    //   if (map.getOptions("minZoom") === 10) {
    //     map.setOptions({
    //       minZoom: 7,
    //       maxZoom: 21
    //     });
    //     $(this).val(this.name + ': 7 ~ 21');
    //   } else {
    //     map.setOptions({
    //       minZoom: 10,
    //       maxZoom: 21
    //     });
    //     $(this).val(this.name + ': 10 ~ 21');
    //   }
    // }
  

    var contentString = [
      '<div class="iw_inner">',
      '   <h3>서울특별시청</h3>',
      '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
      '       <img src="' + HOME_PATH + '/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />',
      '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
      '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
      '   </p>',
      '</div>'
    ].join('');

    var infowindow = new naver.maps.InfoWindow({
      content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });

    infowindow.open(map, marker);
  }
}
