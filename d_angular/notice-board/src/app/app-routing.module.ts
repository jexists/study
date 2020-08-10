import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBoardComponent } from './main-board/main-board.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { DtlBoardComponent } from './dtl-board/dtl-board.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainBoardComponent },
  { path: 'new', component: NewBoardComponent },
  { path: 'dtl/:id', component: DtlBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
