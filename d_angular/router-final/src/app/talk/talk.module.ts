import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkComponent } from './talk.component';
import { TalkRoutingModule } from './talk-routing.module';
@NgModule({
  imports: [
    CommonModule,
    TalkRoutingModule
  ],
  declarations: [TalkComponent]
})
export class TalkModule { }
