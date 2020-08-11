import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {

  @Input() comment;

  @Input() isReply;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.comment);
  }

  onTest(){
    console.log("##" + JSON.stringify(this.comment));
    
  }
  // onOpenNewCmt() {
  //   this.isCancle.emit();
  //   console.log('답글 클릭');
    
  // }
  onOpenNewCmt() {
    this.isReply = !this.isReply;
  }
}
