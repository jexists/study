import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';

const CORE_COMPS = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  DashBoardComponent,
  ErrorPageComponent
];


@NgModule({
  declarations: CORE_COMPS,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: CORE_COMPS
})
export class MainModule { }
