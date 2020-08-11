import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BoardElement } from '../core/board.model';
import { BoardDataService } from '../core/board-data.service';
import { UUIDService } from '../core/uuid.service';


@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent implements OnInit {

  selBoard: BoardElement;

  newBoardForm: FormGroup;

  constructor(
    private datePipe: DatePipe,
    private boardService: BoardDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.onFormGroupInit();
    this.onPropertyInit();
  }

  onFormGroupInit(): void {
    this.newBoardForm = new FormGroup({
      newTitle: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])),
      newContents: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        // Validators.maxLength(10000)
      ]))
    });
  }

  onPropertyInit(): void {
    this.selBoard = new BoardElement();
  }

  onSubmit(): void {
    this.selBoard.user = '새로작성';
    this.selBoard.contents = this.newBoardForm.value.newContents;
    this.selBoard.date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    // this.selBoard.date = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss")


    this.selBoard.uuid = UUIDService.generateUUID();
    
    let num = this.boardService.boards.length;
    this.selBoard.id = ++num;
    
    this.selBoard.title = this.newBoardForm.value.newTitle;

    this.boardService.createBoard(this.selBoard);
    this.router.navigate([`/main`]);
  }

  onValid(): boolean {
    if (this.newBoardForm.get('newTitle').valid && this.newBoardForm.get('newContents').valid) {
      return true;
    }
    return false;
  }
}
