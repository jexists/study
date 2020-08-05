import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  title = '상품등록';
  product: any;

  constructor() { 
    this.initProduct();
  }

  ngOnInit(): void {
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
