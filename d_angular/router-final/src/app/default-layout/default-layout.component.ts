import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class DefaultLayoutComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav; // 모바일일때 사이드바
  // @ViewChild('navbar', { static: true }) private navbar: NavbarComponent;


  mobileQuery: MediaQueryList;
  private toggleButton: any;
  private _mobileQueryListener: () => void;

  toggleActive = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    private sidenavService: SidebarService,
    media: MediaMatcher,
    private element: ElementRef,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    alert("default-layout");
    this.sidenavService.setSidenav(this.sidenav);
    this.sidenavService.close();
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    
    if (window.innerWidth >= 1280) {
      setTimeout(() => {
        this.sidenavService.open();
        // this.navbar.toggleSidenav();
        this.toggleButton.style.display = 'none';
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSidenav() {

  }



}
