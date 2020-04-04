import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptBasicComponent } from './typescript-basic.component';

describe('TypescriptBasicComponent', () => {
  let component: TypescriptBasicComponent;
  let fixture: ComponentFixture<TypescriptBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
