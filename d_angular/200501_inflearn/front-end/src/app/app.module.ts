import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './section/stopwatch/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // SectionComponent,
    // TimeDisplayComponent,
    // ButtonsComponent,
  ],
  imports: [
    RouterModule,
    //라우터 최상단에다가 적는다.
    BrowserModule,
    AppRoutingModule,

    LayoutModule,
    //import * as LayoutModule from './a.module' 의미가 같다.
    //LayoutModule.TestComponent를 불러올수있다.
    //LayoutModule에서 export해야 AppComponent에 사용이 가능하다.
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
