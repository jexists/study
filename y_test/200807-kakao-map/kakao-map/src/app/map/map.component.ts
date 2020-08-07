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

  constructor(
    private mapService: MapService,
  ) { }

  ngOnInit(): void {

    

    this.getMap();
  }

  getMap() {
    this.mapService.getPosition().then(pos => {
      //현재위치 받기
      console.log(`Positon: lng:${pos.lng} lat:${pos.lat}`);
      
      var container = document.getElementById('map'); //지도를 표시한 태그
      var options = {
        center: new kakao.maps.LatLng(pos.lat, pos.lng), //현재위치 정하기
        level: 3 //지도 확대 레벨
      };
      
      //카카오맵 생성
      var map = new kakao.maps.Map(container, options);

      this.map = map;

      //지도 확대 축소 컨트롤 생성
      var zoomControl = new kakao.maps.ZoomControl();
      // 확대 축소 컨트롤 위치
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); 
      

      
    });
  }

  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  zoomIn() {
    this.map.setLevel(this.map.getLevel() - 1);
  }

  // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  zoomOut() {
   this.map.setLevel(this.map.getLevel() + 1);
  }
}
