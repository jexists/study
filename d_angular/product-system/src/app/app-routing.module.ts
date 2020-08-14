import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CategoryComponent } from './category/category/category.component';
import { ProductManagementComponent } from './product/product-management/product-management.component';
import { DashBoardComponent } from './main/dash-board/dash-board.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
    { path: 'product-list', component: ProductManagementComponent },
    { path: 'category-list', component: CategoryComponent },
    { path: 'total-summary', component: DashBoardComponent },
    { path: '**', component: ErrorPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }