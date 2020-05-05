import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';

//라우터모듈 정보 포함시키기
const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]


@NgModule({
  declarations: [
    SectionComponent,
    // TimeDisplayComponent,
    // ButtonsComponent,
    
  ],
  exports: [
    SectionComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    StopwatchModule,

    RouterModule.forChild(routes)
    //라우터를 사용할려면 라우터모듈을 임폴트를 해야한다
    //그리고 라우터 forRoot | forChild 매소드 사용
    //export 해야한다.
  ]
})
export class SectionModule { }
