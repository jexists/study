import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Toast, ToastrService } from 'ngx-toastr';

import { DataStoreService } from 'src/app/shared/data-store.service';
import { ActionMode } from 'src/app/shared/shared-util';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  subTitle: string;
  actionMode: ActionMode;
  categoryForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: DataStoreService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    
  }

}
