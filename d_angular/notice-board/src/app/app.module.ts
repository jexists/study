import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EditorModule } from '@tinymce/tinymce-angular';

import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { DtlBoardComponent } from './dtl-board/dtl-board.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { UUIDService } from './core/uuid.service';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    NewBoardComponent,
    DtlBoardComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    DatePipe,
    UUIDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
