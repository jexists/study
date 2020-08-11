import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {

  @Input() comment;

  @Input() isReply;
  @Output() isCancle = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isReply);
    
  }

  onOpenNewCmt() {
    // this.isReply = !this.isReply;
    this.isCancle.emit();
  }
}
