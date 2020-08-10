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
    private BoardDataService: BoardDataService,
    ) { }
    
    ngOnInit(): void {
      this.onDataInit();
  }


  onDataInit(): void {
    const boardId = +this.route.snapshot.paramMap.get('id') - 1;
    this.selBoard = this.BoardDataService.boards[boardId];
  }
  

}
