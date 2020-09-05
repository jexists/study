import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'talk',
    pathMatch: 'full',
  },
  { path: '404', component: NotFoundComponent },
  // { path: '500', component: P500Component },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'talk',
        loadChildren: () => import('./talk/talk.module').then(m => m.TalkModule)
      },
      {
        path: 'market',
        loadChildren: () => import('./market/market.module').then(m => m.MarketModule)
      }
    ],
    // canActivate: [AuthGuard],
    // runGuardsAndResolvers: 'always'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
