import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreate = new EventEmitter<{serverName: string, serverContent: string}>();
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') severContentInput: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  // onAddServer() {
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);
    console.log(this.severContentInput);
    
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.severContentInput.nativeElement.value});
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    // this.bluePrintCreate.emit({serverName: this.newServerName, serverContent: this.newServerContent});

    this.bluePrintCreate.emit({
      serverName: nameInput.value, 
      serverContent: this.severContentInput.nativeElement.value});
  }

}
