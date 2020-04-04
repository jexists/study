import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularBasicComponent } from './courses/angular-basic/angular-basic.component';
import { IonicComponent } from './courses/ionic/ionic.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    AngularBasicComponent,
    IonicComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
