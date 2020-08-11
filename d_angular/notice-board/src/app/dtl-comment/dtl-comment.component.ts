import { Component, OnInit, Input } from '@angular/core';
import { BoardDataService } from '../core/board-data.service';

@Component({
  selector: 'app-dtl-comment',
  templateUrl: './dtl-comment.component.html',
  styleUrls: ['./dtl-comment.component.scss']
})
export class DtlCommentComponent implements OnInit {

  @Input() comment;

  isReply:boolean = false;

  constructor(
    private boardDataService: BoardDataService,
  ) { }

  ngOnInit(): void {
    // console.log("??" + JSON.stringify(this.comment.id));
    
  }

  onOpenNewCmt() {
    this.isReply = !this.isReply;
  }


}
