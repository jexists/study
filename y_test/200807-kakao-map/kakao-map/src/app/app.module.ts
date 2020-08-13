import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { Map2Component } from './map2/map2.component';
import { SearchMapComponent } from './search-map/search-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapInfoComponent,
    Map2Component,
    SearchMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
