import { Component, OnInit } from '@angular/core';
import { BuckitList } from '../../core/buckitlist';
import { BuckitListService } from '../../core/bucklist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  buckitLists: BuckitList[] = [];

  constructor(
    private buckitListService: BuckitListService
    ) { }

  ngOnInit() {
    this.getBuckitLists();
    this.getNavBg();
  }

  getNavBg(): void {
    document.querySelector('.nav-home').classList.add('act');
    document.querySelector('.nav-buckit').classList.remove('act');
  }

  getBuckitLists(): void {
    this.buckitListService.getBuckitLists()
      .subscribe(buckitLists => this.buckitLists = buckitLists.slice(1, 5));
  }
}