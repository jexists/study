import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardElement } from '../core/board.model';
import { BoardDataService } from '../core/board-data.service';



@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'user', 'date'];
  dataSource = this.BoardDataService.boards;

  constructor(
    private router: Router,
    private BoardDataService: BoardDataService,
  ) { }

  ngOnInit(): void {
    // console.log('main-board');
  }

  onModalOpen(row): void {
    // console.log(`click ${JSON.stringify(row.id)}`);
    this.router.navigate([`/dtl/${row.id}`]);
    console.log(row);
  }
  
  onNewModalOpen(): void {
    this.router.navigate([`/new`]);
    
  }
}






