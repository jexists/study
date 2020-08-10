import { Component, OnInit } from '@angular/core';

export interface BoardElement {
  title: string;
  number: number;
  user: string;
  date: string;
}

const ELEMENT_DATA: BoardElement[] = [
  {number: 1, title: '[스크랩] 황인범 러시아리그 루빈카잔???', user: '네디옹', date: '2020.08.10.'},
  {number: 2, title: '울산 포항전에 아스날 레플 입고 가면 안되겠죠?', user: '마니', date: '2020.08.10.'},
  {number: 3, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '옥주', date: '2020.08.10.'},
  {number: 4, title: '넘넘 속상합니다. 팬텀베놈 니트 데미지ㅠ', user: '박긍정', date: '2020.08.10.'},
  {number: 5, title: '[스크랩] 리버풀 새로운 소매스폰서 찾는 중', user: '굴리뜨', date: '2020.08.10.'},
  {number: 6, title: '[K리그 1] 15R 상주 VS 부산 골 장면', user: '인생샷', date: '2020.08.10.'},
  {number: 7, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '학사경고', date: '2020.08.10.'},
  {number: 8, title: '21 챔스 패치 안나오긴햤지만... 미리 작업해버리고 싶은데 나중에 후회할까요', user: '화이토', date: '2020.08.10.'},
  {number: 9, title: '[단독]벤투호 황태자 황인범, 러시아 루빈카잔행 확정', user: '대혁명', date: '2020.08.10.'},
  {number: 10, title: '[오피셜] 이케르 카시야스 현역 은퇴', user: '헐랭랭', date: '2020.08.10.'},
];

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  displayedColumns: string[] = ['number', 'title', 'user', 'date'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    // console.log('main-board');
  }

  onModalOpen(row): void {
    console.log(`click ${JSON.stringify(row)}`);
  }

  onNewModalOpen(): void {
    console.log('새로만들기');
    
  }
}






