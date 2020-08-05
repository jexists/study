import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ManagerInfoComponent } from './manager-info/manager-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    CustomValidationComponent,
    ReactiveFormsComponent,
    ManagerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
