import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { CommentElement } from '../core/board.model';
import { BoardDataService } from '../core/board-data.service';
import { UUIDService } from '../core/uuid.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Input() selBoard;
  @Output() created = new EventEmitter;
  @Output() isReply = new EventEmitter;
  comment: CommentElement;

  newCommentForm: FormGroup;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private boardService: BoardDataService
  ) { }

  ngOnInit(): void {
    this.onFormGroupInit();
    this.onPropertyInit();
  }

  onFormGroupInit(): void {
    this.newCommentForm = new FormGroup({
      newComment: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]))
    });
  }

  onPropertyInit(): void {
    this.comment = new CommentElement();
  }


  test(): void {
    console.log(this.selBoard.uuid);
     
  }
  onSubmit(): void {
    // if(!this.selBoard.uuid === undefined) {
      this.comment.boardUuid = this.selBoard.uuid;

    this.comment.date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.comment.user = "새댓글";
    this.comment.uuid = UUIDService.generateUUID();
    this.comment.contents = this.newCommentForm.value.newComment;

    this.boardService.createComment(this.comment);
    this.newCommentForm.get('newComment').setValue('');
    this.created.emit(this.comment);
    // alert(JSON.stringify(this.comment));
    this.onPropertyInit();
    this.onCancleCmt();
  }

  onCancleCmt(): void {
    this.isReply.emit();
  }
  onValid(): boolean{
    if (this.newCommentForm.get('newComment').valid) {
      return true;
    }
    return false;
  }

}
