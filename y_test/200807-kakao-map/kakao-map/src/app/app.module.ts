import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { Map2Component } from './map2/map2.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapInfoComponent,
    Map2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
