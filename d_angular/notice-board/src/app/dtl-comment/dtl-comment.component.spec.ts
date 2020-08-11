import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtlCommentComponent } from './dtl-comment.component';

describe('DtlCommentComponent', () => {
  let component: DtlCommentComponent;
  let fixture: ComponentFixture<DtlCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtlCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtlCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
