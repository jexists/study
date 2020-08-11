import { Injectable } from '@angular/core';

import { BoardElement, CommentElement } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {

  constructor() { }

  //////////////////////////////////////////////
  //
  //  DATA REPO
  //
  /////////////////////////////////////////////


  public boards: BoardElement[] = [
    { uuid: "4d1b6c34-753b-8166-8b7c-509592615d9f", id: 1, title: '[스크랩] 황인범 러시아리그 루빈카잔???', user: '네디옹', date: '2020.08.10', contents: '<p>lorem100</p>' },
    { uuid: "84f7551a-d48b-86e7-aba7-9f6b7df3c7a2", id: 2, title: '울산 포항전에 아스날 레플 입고 가면 안되겠죠?', user: '마니', date: '2020.08.10', contents: '울산 포항전에 아스날 레플 입고 가면 어떻게 되나요..? 하하하ㅏㅎ ' },
    { uuid: "c63583f9-1829-8c2a-f301-4ef26bb92a8e", id: 3, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '옥주', date: '2020.08.10', contents: '메시클래스 호날두 클래스  ' },
    { uuid: "ab50c347-1408-a098-b0fc-739f93110c84", id: 4, title: '넘넘 속상합니다. 팬텀베놈 니트 데미지ㅠ', user: '박긍정', date: '2020.08.10', contents: '나도 속상해용...ㅠㅠㅠ ' },
    { uuid: "771cc8c5-ac4d-cc62-cf45-e99df2026320", id: 5, title: '[스크랩] 리버풀 새로운 소매스폰서 찾는 중', user: '굴리뜨', date: '2020.08.10', contents: '새로운 스폰서 주세요 ' },
    { uuid: "9b528016-1834-35d3-045b-2d83cbff20e1", id: 6, title: '[K리그 1] 15R 상주 VS 부산 골 장면', user: '인생샷', date: '2020.08.10', contents: '골골골골골골!!!!' },
    { uuid: "f4f9916f-bb25-da71-a840-7fa3c5f2268b", id: 7, title: '[챔스리그] 호날두, 메시 클래스 입증골', user: '학사경고', date: '2020.08.10', contents: '입증 골! ' },
    { uuid: "d945ce84-4819-44bc-965c-d11eb4a67f04", id: 8, title: '21 챔스 패치 안나오긴햤지만... 미리 작업해버리고 싶은데 나중에 후회할까요', user: '화이토', date: '2020.08.10', contents: '후회하지말아용' },
    { uuid: "f5656a1e-191c-08e8-b6b8-54a66cbb7204", id: 9, title: '[단독]벤투호 황태자 황인범, 러시아 루빈카잔행 확정', user: '대혁명', date: '2020.08.10', contents: '러시아아아아아아' },
    { uuid: "c220aed0-e7f3-6dd8-1be1-57e0162e6619", id: 10, title: '[오피셜] 이케르 카시야스 현역 은퇴', user: '헐랭랭', date: '2020.08.10', contents: '은퇴퇴퇴 ' },
  ];

  public comments: CommentElement[] = [
    { uuid: "c150aed0-e7f3-6dd8-1be1-57e0162e6523", boardUuid: "4d1b6c34-753b-8166-8b7c-509592615d9f", user: "뉴댓글", date: "2020.08.11", contents: "댓글"},
    { uuid: "c111aed0-e7f3-6dd8-1be1-57e0134e6421", boardUuid: "4d1b6c34-753b-8166-8b7c-509592615d9f", user: "뉴댓글", date: "2020.08.11", contents: "두번째 댓글 댓글 2빠"},
    { uuid: "c289aed0-e7f3-6dd8-1be1-57e0162e1234", boardUuid: "c150aed0-e7f3-6dd8-1be1-57e0162e6523", user: "뉴댓글", date: "2020.08.11", contents: "대댓글 나와라라라라라"},
  ];

  public cmtMap: Map<String, CommentElement[]> = new Map<String, CommentElement[]>();
  public filterMap: CommentElement[] = [];

  //////////////////////////////////////////////
  //
  //  Board Function
  //
  /////////////////////////////////////////////

  createBoard(board): void {
    this.boards.push(board);
  }

  //////////////////////////////////////////////
  //
  //  Comments Function
  //
  /////////////////////////////////////////////

  clearCards(): void {
    this.comments.length = 0;
  }

  createComment(comment): void {
    this.comments.push(comment);
    console.log(JSON.stringify(this.comments));
    
  }
  

  loadComment(selBoard): void {
    for (let i = 0; i < this.comments.length; i++) {
      if (selBoard.uuid === this.comments[i].boardUuid) {
        this.filterMap.push(this.comments[i]);
      }
    }
  }
  // loadComments(data:CommentElement[], id): void {
  //   let FinalCmt = data.filter((cmt) => {
  //     if (cmt.boardUuid === id){
  //       this.cmtMap.push(cmt)
  //     }else{
  //       return false;
  //     }
  //   });
  //   console.log("&&&" + JSON.stringify(FinalCmt));
    
  // }
  
}

