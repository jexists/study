import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentElement } from '../core/board.model';
import { DatePipe } from '@angular/common';
import { BoardDataService } from '../core/board-data.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Input() selBoard;
  comment: CommentElement;

  newCommentForm: FormGroup;
  constructor(
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


  onSubmit(): void {
    this.comment.boardUuid = this.selBoard.uuid;
    this.comment.date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.comment.user = this.selBoard.user;
    this.comment.contents = this.newCommentForm.value.newComment;

    console.log(this.comment);
    this.boardService.createComment(this.comment);
    this.newCommentForm.get('newComment').setValue('');
  }

  onValid(): boolean{
    if (this.newCommentForm.get('newComment').valid) {
      return true;
    }
    return false;
  }

}
