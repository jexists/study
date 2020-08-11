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
      // console.log(`Positon: lng:${pos.lng} lat:${pos.lat}`);

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

      ////////////////////////////////
      // 마커 이미지 정보 입력
      var imageSrc = './assets/marker3.png', // 마커이미지의 주소
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지 크기
        imageOption = { offset: new kakao.maps.Point(27, 69) }; //이미지 안에서의 좌표
      // 마커 정보 입력
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(pos.lat, pos.lng);
      // 마커 생성
      var marker = new kakao.maps.Marker({
        position: markerPosition, //마커위치
        image: markerImage // 마커이미지
      });

      
      // 마커 지도 위 표시
      marker.setMap(map);


      ////////////////////////////////
      // 마커 이미지 정보 입력
      var imageSrc2 = './assets/marker4.png', // 마커이미지의 주소
        imageSize2 = new kakao.maps.Size(64, 69), // 마커이미지 크기
        imageOption2 = { offset: new kakao.maps.Point(27, 69) }; //이미지 안에서의 좌표
      // 마커 정보 입력
      var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
        markerPosition2 = new kakao.maps.LatLng(pos.lat + 0.001, pos.lng + 0.001);
      // 마커 생성
      var marker2 = new kakao.maps.Marker({
        position: markerPosition2, //마커위치
        image: markerImage2 // 마커이미지
      });

      
      // 마커 지도 위 표시
      marker2.setMap(map);
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
      // let marker = new kakao.maps.Marker({ position: points[i] });
      // marker.setMap(this.map);
      // LatLngBounds 객체에 좌표를 추가
      bounds.extend(points[i]);
    }
    //지도범위 재설정 (중심좌표, 레벨 바뀜)
    this.map.setBounds(bounds);
  }
}
