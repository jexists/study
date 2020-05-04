import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    TestComponent,
    //하나의 컴포넌트는 하나의 모듈에 등록해야한다.
    //딱 하나만 가능하다.
    //등록이 않됬을 경우: is not a known element
    //선언

    TestComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    TestComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
