import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent implements OnInit, AfterViewInit {

  title = 'Custom Validation';
  product: any;
  errorCodes = ['min', 'max', 'required', 'pattern'];
  errors: any[] = [];
  @ViewChild('prodForm') prodForm: NgForm;

  constructor() { 
    this.initProduct();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.prodForm.statusChanges.pipe(
      filter(s => s === 'INVALID'),
      switchMap(() => {
        this.errors = [];
        return from(Object.keys(this.prodForm.controls));
      }))
      .subscribe((controlName: any) => {
        this.errorCodes
        .filter(code => this.prodForm.hasError(code, [controlName]))
        .forEach(code => {
          const errorMsg = this.prodForm.getError(code, [controlName]);
          this.errors.push({controlName, code, errorMsg})
        });
      });

    this.prodForm.statusChanges.pipe(
      filter(s => s === 'VALID'))
      .subscribe(() => this.errors = []);
  }

  initProduct() {
    this.product = { name: '', listPrice: '', qty: 0, desc: ''};
  }

  onSubmit() {
    alert(`submit sucess \n ${JSON.stringify(this.product)}`);
  }

  onReset() {
    this.initProduct();
  }
}
