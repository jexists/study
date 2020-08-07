import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
// import { AnmCoreModule } from 'ngx-naver-map';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    // AnmCoreModule.forRoot({
    //   apiKey: 'mlvqwpvmii'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
