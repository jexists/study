import { Component, OnInit } from '@angular/core';
import { MapService } from '../service/map.service';

declare let kakao: any;

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.scss']
})
export class Map2Component implements OnInit {
  map: any;
  myLatLng: any;
  marker: any;

  // MARKERINFO======================
  markerInfo = [
    {
      title: '카카오pc',
      latlng: new kakao.maps.LatLng(37.4979671, 127.11512),
      imgSrc: './assets/marker1.png',
      markerSz: new kakao.maps.Size(34, 39),
      content: `<div class="test">카카오pc</div>`
    },
    {
      title: '청익FC',
      latlng: new kakao.maps.LatLng(37.497936, 127.119477),
      imgSrc: './assets/marker2.png',
      markerSz: new kakao.maps.Size(34, 39),
      content: `<div class="test">청익FC</div>`
    },
    {
      title: '호랑이FC',
      latlng: new kakao.maps.LatLng(37.497879, 127.119940),
      imgSrc: './assets/marker3.png',
      markerSz: new kakao.maps.Size(34, 39),
      content: `<div class="test">호랑이FC</div>`
    },
    {
      title: 'FC하슬라',
      latlng: new kakao.maps.LatLng(37.497393, 127.110738),
      imgSrc: './assets/marker4.png',
      markerSz: new kakao.maps.Size(34, 39),
      content: `<div class="test">FC하슬라</div>`
    }
  ];


  constructor(
    private mapService: MapService,
  ) { }

  ngOnInit(): void {
    //지도 실행
    this.getMap();

  }

  getMap() {
    this.mapService.getPosition().then(pos => {
      //현재위치 받기
      console.log(`Positon: lng:${pos.lng} lat:${pos.lat}`);

      let myLatLng = new kakao.maps.LatLng(pos.lat, pos.lng);
      this.myLatLng = myLatLng;

      var container = document.getElementById('map'); //지도를 표시한 태그
      var mapOptions = {
        center: myLatLng, //현재위치 정하기
        level: 5 //지도 확대 레벨
      };

      //카카오맵 생성
      var map = new kakao.maps.Map(container, mapOptions);
      this.map = map; //변수담기-다른 함수에 사용하기위해서

      //지도 확대 축소 컨트롤 생성 (자동디자인)
      var zoomControl = new kakao.maps.ZoomControl();
      //확대 축소 컨트롤 위치 (자동디자인)
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      //마커 글씨 생성
      this.onMakeMarker();
      // this.onTestMarker();
    });
  }


  // forEACH 사용

  onTestMarker() {

  }





  onMakeMarker(): void {
    var overlay = [];
    var marker = [];

    for (let i = 0; i < this.markerInfo.length; i++) {
      // 마커 생성
      marker[i] = new kakao.maps.Marker({
        map: this.map, // 마커를 표시할 지도
        position: this.markerInfo[i].latlng, // 마커를 표시할 위치
        title: this.markerInfo[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
        image: new kakao.maps.MarkerImage(this.markerInfo[i].imgSrc, this.markerInfo[i].markerSz) // 마커 이미지 
      });

      // console.log(marker[i]);
      overlay[i] = new kakao.maps.CustomOverlay({
        content: this.markerInfo[i].content,
        map: this.map,
        position: this.markerInfo[i].latlng
      });
      
      overlay[i].setMap(null);
      var selectedMarker = null;
      var selectedInfo = null;
      
      // // 마커에 mouseover 이벤트를 등록
      // kakao.maps.event.addListener(marker[i], 'mouseover', function () {
      //   // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
      //   if (!selectedMarker || selectedMarker !== marker[i]) {
      //     overlay[i].setMap(marker[i].f);
      //   }
      // });
      
      // // 마커에 mouseout 이벤트를 등록합니다
      // kakao.maps.event.addListener(marker[i], 'mouseout', function () {
      //   // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
      //   if (!selectedMarker || selectedMarker !== marker[i]) {
      //     overlay[i].setMap(null);
      //   }
      // });
      
      // 마커에 click 이벤트를 등록합니다
      kakao.maps.event.addListener(marker[i], 'click', function () {
        
        // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
        if (!selectedMarker || selectedMarker !== marker[i]) {
          overlay[i].setMap(marker[i].f);
          !!selectedInfo && selectedInfo.setMap(null);
        }
        selectedMarker = marker[i];
        selectedInfo = overlay[i];
      });
    }
  } //for문
}
