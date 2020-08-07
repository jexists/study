import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapListComponent } from './map-list/map-list.component';
// import { AnmCoreModule } from 'ngx-naver-map';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapListComponent
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
