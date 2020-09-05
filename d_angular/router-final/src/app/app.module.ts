import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './default-layout/sidebar.service';
@NgModule({
  declarations: [				
    AppComponent,
    // DefaultLayoutModule,
    LoginComponent,
    NotFoundComponent,
    DefaultLayoutComponent,
      // SidebarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // DefaultLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    SidebarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
