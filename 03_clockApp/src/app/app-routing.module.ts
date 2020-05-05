import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {
  //   path : '123', // 뒤에 링크
  //   redirectTo: 'index', 연결파일
  //   pathMatch: 'prefix(기본/접두사 앞에있는것만이면 경로 이동) | full(정확)'
  //   // domain.com/123~~ => prefix 연결
  //   // domain.com/123 => full (정확하게 맞아야한다.)
  // },

  //localhost:4200 => localhost:4200/index
  // {
  //   path : '',
  //   redirectTo: 'index',
  //   pathMatch: 'full'
  // },
  // {
  //   path : 'index',
  //   component: AppComponent
  // }
   
  {
      path : '',
      redirectTo: 'stopwatch',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
