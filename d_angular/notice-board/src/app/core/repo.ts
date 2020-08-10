import { Injectable } from '@angular/core';

// import * as _ from 'lodash';

import { BoardElement } from './board.model';

@Injectable() export class HdRepo {


  private boards: BoardElement[] = [];
  

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

}