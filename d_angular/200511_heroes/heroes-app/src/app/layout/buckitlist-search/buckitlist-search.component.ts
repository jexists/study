import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { BuckitList } from '../../core/buckitlist';
import { BuckitListService } from '../../core/bucklist.service';

@Component({
  selector: 'app-buckitlist-search',
  templateUrl: './buckitlist-search.component.html',
  styleUrls: [ './buckitlist-search.component.scss' ]
})
export class BuckitListSearchComponent implements OnInit {

  buckitLists$: Observable<BuckitList[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private buckitListService: BuckitListService
    ) {}

  // 사용자가 입력한 검색어를 옵저버블 스트림으로 보냅니다.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.buckitLists$ = this.searchTerms.pipe(
      // 연속된 키입력을 처리하기 위해 300ms 대기합니다.
      debounceTime(300),

      // 이전에 입력한 검색어와 같으면 무시합니다.
      distinctUntilChanged(),

      // 검색어가 변경되면 새로운 옵저버블을 생성합니다.
      switchMap((term: string) => this.buckitListService.searchBuckitList(term)),
    );
  }
}