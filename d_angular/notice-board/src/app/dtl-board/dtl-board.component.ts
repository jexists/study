import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardDataService } from '../core/board-data.service';
import { BoardElement } from '../core/board.model';


@Component({
  selector: 'app-dtl-board',
  templateUrl: './dtl-board.component.html',
  styleUrls: ['./dtl-board.component.scss']
})
export class DtlBoardComponent implements OnInit {

  @Input() selBoard;
  @Input() Boards: BoardElement[];


  constructor(
    private route: ActivatedRoute,
    public boardDataService: BoardDataService,
    ) { }
    
    ngOnInit(): void {
      this.onDataInit();
      this.onContents();
      this.onLoadComments();
  }

  onLoadComments(): void {
    // const boardId = +this.route.snapshot.paramMap.get('id') - 1;
    this.boardDataService.loadComments()
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
