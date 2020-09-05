import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidebarService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    console.log('사이드바 토글 눌림2');
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    console.log('토글 눌림');
    this.sidenav.toggle();
  }
}
