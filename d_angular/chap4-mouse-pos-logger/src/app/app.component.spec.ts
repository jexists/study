import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService } from './my-special-logger.service';
import { AnotherLoggerService } from './another-logger.service';
import { LogLevel } from './log-level.enum';
import { LOG_LEVEL_TOKEN } from './app.tokens';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MouseTrackZoneComponent
      ],
      providers: [MySpecialLoggerService, AnotherLoggerService, 
        { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mouse-pos-logger'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mouse-pos-logger');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mouse-pos-logger app is running!');
  });
});
