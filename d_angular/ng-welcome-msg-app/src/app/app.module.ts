import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: COMPOSITION_BUFFER_MODE, useValue: false},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
