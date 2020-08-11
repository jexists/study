import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardDataService } from '../core/board-data.service';
import { BoardElement } from '../core/board.model';


@Component({
  selector: 'app-dtl-board',
  templateUrl: './dtl-board.component.html',
  styleUrls: ['./dtl-board.component.scss']
})
export class DtlBoardComponent implements OnInit, OnDestroy {

  @Input() selBoard: BoardElement;

  filterMap = this.boardDataService.filterMap;
  comments = this.boardDataService.comments;

  constructor(
    private route: ActivatedRoute,
    public boardDataService: BoardDataService,
  ) { }

  ngOnInit(): void {
    this.onDataInit();
    this.onContents();

    this.onFilterCmt();
  }

  ngOnDestroy(): void{
    this.filterMap.length = 0;
  }

  onFilterCmt(): void {
    // for (let i = 0; i < this.comments.length; i++) {
    //   // console.log('첫번째값 : ', this.selBoard.uuid);
    //   // console.log('두번째값 : ', this.comments[i].boardUuid);
    //   if (this.selBoard.uuid === this.comments[i].boardUuid) {
    //     this.filterMap.push(this.comments[i]);
    //   }
    // }
    this.boardDataService.loadComment(this.selBoard);
  }

  onAddComment($event): void{
    this.filterMap.push($event);
  }


  onDataInit(): void {
    const boardId = +this.route.snapshot.paramMap.get('id') - 1;
    this.selBoard = this.boardDataService.boards[boardId];
  }

  onContents(): void {
    let contents = <HTMLElement>document.querySelector('.contents');
    contents.innerHTML = this.selBoard.contents;
  }

}
