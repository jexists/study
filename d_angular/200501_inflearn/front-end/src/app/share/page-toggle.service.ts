import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class PageToggleService {

  public routingCount = 0;
  constructor(
    private router: Router
  ) { }

  plusCount(): void {
    this.routingCount++;
  }

  goPage(target):void {

    this.routingCount++;
    this.router.navigateByUrl(target)
  }
}
