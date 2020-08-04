import { Component, OnInit, Input, Host, Optional } from '@angular/core';

import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.scss'],
  // providers: [MySpecialLoggerService, {
  //   provide: LOG_LEVEL_TOKEN, 
  //   useValue: LogLevel.DEBUG }]
  })
export class MouseTrackZoneComponent implements OnInit {

  // logLevel: LogLevel = LogLevel.INFO;
  // @Input() private logger: MySpecialLoggerService;
  logger: LoggerService;

  constructor(
    @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
    anotherLogger: AnotherLoggerService
  ) {
    // this.logger = new MySpecialLoggerService(this.logLevel);
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit(): void {
  }


  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`)
  }

}
