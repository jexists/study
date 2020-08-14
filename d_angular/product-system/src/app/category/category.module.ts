import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CategoryModule { }
