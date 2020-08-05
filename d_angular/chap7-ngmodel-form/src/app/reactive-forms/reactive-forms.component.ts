import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  title: 'reactive';
  prodForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(public formBuilder: FormBuilder) {
    this.prodForm = this.formBuilder.group({
      name: ['', Validators.required],
      listPrice: [0,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          Validators.pattern('[1-9]\\d*')
        ])
      ],
      qty: [0,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
          Validators.pattern('[1-9]\\d*')
        ])
      ],
      desc: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ])
      ],
    });
  }

  buildManagerFormGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      phoneNum: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern('010-[0-9]{4}-[0-9]{4}')
        ])
      ]
    });
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.prodForm.value)}`);
  }
}
