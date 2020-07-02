import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BuckitList } from '../../core/buckitlist';
import { BuckitListService } from '../../core/bucklist.service';

@Component({
  selector: 'app-buckitlist-detail',
  templateUrl: './buckitlist-detail.component.html',
  styleUrls: ['./buckitlist-detail.component.scss']
})
export class BuckitListDetailComponent implements OnInit {

  @Input() buckitList: BuckitList;

  constructor(
    private route: ActivatedRoute,
    private buckitListService: BuckitListService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBuckitList();
    this.getNavBg();
  }
  getNavBg(): void {
    document.querySelector('.nav-home').classList.remove('act');
    document.querySelector('.nav-buckit').classList.remove('act');
  }
  
  getBuckitList(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.buckitListService.getBuckitList(id)
      .subscribe(buckitList => this.buckitList = buckitList);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.buckitListService.updateBuckitList(this.buckitList)
      .subscribe(() => this.goBack());
  }
}
