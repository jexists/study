import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreate = new EventEmitter<{serverName: string, serverContent: string}>();
  
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {

  }

  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBluePrint() {
    this.bluePrintCreate.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
