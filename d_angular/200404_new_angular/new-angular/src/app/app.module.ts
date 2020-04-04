import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { IonicComponent } from './courses/ionic/ionic.component';
import { AngularBasicComponent } from './courses/angular-basic/angular-basic.component';
import { TypescriptBasicComponent } from './courses/typescript-basic/typescript-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    IonicComponent,
    AngularBasicComponent,
    TypescriptBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
