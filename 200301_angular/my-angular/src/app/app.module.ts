import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
//form input사용하기위해 import함

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //import해서 사용할려고
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
