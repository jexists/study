import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,
  ],
  exports: [
    // TimeDisplayComponent,
    // ButtonsComponent,
    StopwatchComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    PageToggleService
  ]
})
export class StopwatchModule { }
