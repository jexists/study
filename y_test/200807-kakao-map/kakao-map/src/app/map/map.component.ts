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
  point: any;

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

      let point = new kakao.maps.LatLng(pos.lat, pos.lng);
      this.point = point;

      var container = document.getElementById('map'); //지도를 표시한 태그
      var options = {
        center: point, //현재위치 정하기
        level: 3 //지도 확대 레벨
      };

      //카카오맵 생성
      var map = new kakao.maps.Map(container, options);
      this.map = map; //변수담기-다른 함수에 사용하기위해서

      //지도 확대 축소 컨트롤 생성 (자동디자인)
      var zoomControl = new kakao.maps.ZoomControl();
      //확대 축소 컨트롤 위치 (자동디자인)
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    });
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
      this.point, //현재위치 (다른위치로 하고싶은경우 아래 코드사용)
      // new kakao.maps.LatLng(33.452278, 126.567803),
    ];

    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
    var bounds = new kakao.maps.LatLngBounds();
    
    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가
    for (let i = 0; i < points.length; i++) {
      let marker = new kakao.maps.Marker({ position: points[i] });
      marker.setMap(this.map);
      // LatLngBounds 객체에 좌표를 추가
      bounds.extend(points[i]);
    }
    //지도범위 재설정
    this.setBounds(bounds);
  }

  setBounds(bounds) {
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    this.map.setBounds(bounds);
  }
}
