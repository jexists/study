import { Component, OnInit } from '@angular/core';
import { MapService } from '../service/map.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare let kakao: any;

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit {

  map: any;
  myLatLng: any;
  marker: any;
  place: any;

  searchField: FormGroup;

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
    this.onFormGroupInit();
  }
  onFormGroupInit(): void {
    this.searchField = new FormGroup({
      keyword: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])),
    });
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

      // 장소 검색 객체를 생성합니다
      this.place = new kakao.maps.services.Places();


      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      //마커 글씨 생성
      this.onMakeMarker();
    });
  }

  searchPlaces(keyword) {
    // console.log(keyword);
    var keyword = keyword;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    this.place.keywordSearch(keyword, this.placesSearchCB);
  }

  placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(data);
      
      // 정상적 검색이 완료 검색 목록과 마커를 표출
      // this.displayPlaces(data);

      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
      console.log('페이지 번호 표출');
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
    
  }

  displayPlaces(data) {
    console.log(data);
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

      overlay[i] = new kakao.maps.CustomOverlay({
        content: this.markerInfo[i].content,
        map: this.map,
        position: this.markerInfo[i].latlng
      });
      overlay[i].setMap(null);

      // 마커에 mouseover 이벤트를 등록
      kakao.maps.event.addListener(marker[i], 'mouseover', function () {
        // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
        if (!selectedMarker || selectedMarker !== marker[i]) {
          overlay[i].setMap(marker[i].f);
        }
      });

      // 마커에 mouseout 이벤트를 등록합니다
      kakao.maps.event.addListener(marker[i], 'mouseout', function () {
        // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
        if (!selectedMarker || selectedMarker !== marker[i]) {
          overlay[i].setMap(null);
        }
      });
      var selectedMarker = null;
      var selectedInfo = null;
      // 마커에 click 이벤트
      kakao.maps.event.addListener(marker[i], 'click', function () {
        if (!selectedMarker || selectedMarker !== marker[i]) {
          overlay[i].setMap(marker[i].f);
          !!selectedInfo && selectedInfo.setMap(null);
        }
        selectedMarker = marker[i];
        selectedInfo = overlay[i];
      });
    }
  } //for문


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
