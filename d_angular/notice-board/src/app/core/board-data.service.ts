import { Injectable } from '@angular/core';

import { BoardElement } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {

  constructor() { }

  public boards: BoardElement[] = [
    { id: 1, title: '[스크랩] 황인범 러시아리그 루빈카잔???', user: '네디옹', date: '2020.08.10.', contents: 'lorem100' },
    { id: 2, title: '울산 포항전에 아스날 레플 입고 가면 안되겠죠?', user: '마니', date: '2020.08.10.', contents: '울산 포항전에 아스날 레플 입고 가면 어떻게 되나요..? 하하하ㅏㅎ ' },
    { id: 3, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '옥주', date: '2020.08.10.', contents: '메시클래스 호날두 클래스  ' },
    { id: 4, title: '넘넘 속상합니다. 팬텀베놈 니트 데미지ㅠ', user: '박긍정', date: '2020.08.10.', contents: '나도 속상해용...ㅠㅠㅠ ' },
    { id: 5, title: '[스크랩] 리버풀 새로운 소매스폰서 찾는 중', user: '굴리뜨', date: '2020.08.10.', contents: '새로운 스폰서 주세요 ' },
    { id: 6, title: '[K리그 1] 15R 상주 VS 부산 골 장면', user: '인생샷', date: '2020.08.10.', contents: '골골골골골골!!!!' },
    { id: 7, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '학사경고', date: '2020.08.10.', contents: '입증 골! ' },
    { id: 8, title: '21 챔스 패치 안나오긴햤지만... 미리 작업해버리고 싶은데 나중에 후회할까요', user: '화이토', date: '2020.08.10.', contents: '후회하지말아용' },
    { id: 9, title: '[단독]벤투호 황태자 황인범, 러시아 루빈카잔행 확정', user: '대혁명', date: '2020.08.10.', contents: '러시아아아아아아' },
    { id: 10, title: '[오피셜] 이케르 카시야스 현역 은퇴', user: '헐랭랭', date: '2020.08.10.', contents: '은퇴퇴퇴 ' },
  ];


  //////////////////////////////////////////////
  //
  //  Board Function
  //
  /////////////////////////////////////////////

  clearBoards(): void {
    this.boards.length = 0;
  }

  loadBoards(boards, isClear: boolean): void {
    if (isClear) { this.clearBoards(); }
    this.boards = this.boards.concat(boards);
  }

  createBoard(board): void {
    this.boards.push(board);
  }
}
