import { Component, OnInit } from '@angular/core';

import { MapService } from '../service/map.service';

declare let kakao: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;
  myLatLng: any;

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


      this.onMakeMarker();
    });
  }

  markerInfo = [
    {
      title: '<div style="text-align: center;">FC하랑</div>',
      latlng: new kakao.maps.LatLng(37.4979671, 127.11512),
      imgSrc: './assets/marker1.png',
      markerSz: new kakao.maps.Size(34, 39),
      // content:`<div>${title}</div>`
    },
    {
      title: '<div>청익FC</div>',
      latlng: new kakao.maps.LatLng(37.497936, 127.119477),
      imgSrc: './assets/marker2.png',
      markerSz: new kakao.maps.Size(34, 39),
      // content:`<div>${title}</div>`
    },
    {
      title: '<div>호랑이FC</div>',
      latlng: new kakao.maps.LatLng(37.497879, 127.119940),
      imgSrc: './assets/marker3.png',
      markerSz: new kakao.maps.Size(34, 39),
      // content:`<div>${title}</div>`
    },
    {
      title: '<div>FC하슬라</div>',
      latlng: new kakao.maps.LatLng(37.497393, 127.110738),
      imgSrc: './assets/marker4.png',
      markerSz: new kakao.maps.Size(34, 39),
      // content:`<div>${title}</div>`
    }
  ];

  onMakeMarker(): void {
    for (var i = 0; i < this.markerInfo.length; i++) {
      // 마커 생성
      var marker = new kakao.maps.Marker({
        map: this.map, // 마커를 표시할 지도
        position: this.markerInfo[i].latlng, // 마커를 표시할 위치
        title: this.markerInfo[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
        image: new kakao.maps.MarkerImage(this.markerInfo[i].imgSrc, this.markerInfo[i].markerSz) // 마커 이미지 
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: this.markerInfo[i].title // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(marker, 'mouseover', this.makeOverListener(this.map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', this.makeOutListener(infowindow));
    }
  }

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
  makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  //확대 축소 버튼 디자인할 경우 - 지도 확대 축소
  zoomIn() {
    this.map.setLevel(this.map.getLevel() - 1);
  }

  //확대 축소 버튼 디자인할 경우 - 지도 확대 함수
  zoomOut() {
    this.map.setLevel(this.map.getLevel() + 1);
  }


  // 현재위치 버튼 클릭하면 현재위치 이동
  onMyPlace() {
    var points = [
      this.myLatLng, //현재위치 (다른위치로 하고싶은경우 아래 코드사용)
      // new kakao.maps.LatLng(33.452278, 126.567803),
    ];

    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
    var bounds = new kakao.maps.LatLngBounds();

    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가
    for (let i = 0; i < points.length; i++) {
      // let marker = new kakao.maps.Marker({ position: points[i] });
      // marker.setMap(this.map);
      // LatLngBounds 객체에 좌표를 추가
      bounds.extend(points[i]);
    }
    //지도범위 재설정 (중심좌표, 레벨 바뀜)
    this.map.setBounds(bounds);
  }
}
