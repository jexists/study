import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    TestComponent
    //하나의 컴포넌트는 하나의 모듈에 등록해야한다.
    //딱 하나만 가능하다.
  ],
  exports: [
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
