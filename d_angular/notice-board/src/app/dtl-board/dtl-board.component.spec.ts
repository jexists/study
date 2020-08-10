import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtlBoardComponent } from './dtl-board.component';

describe('DtlBoardComponent', () => {
  let component: DtlBoardComponent;
  let fixture: ComponentFixture<DtlBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtlBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtlBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
