import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {

  langCode: string;

  constructor() {
    
  }

  ngOnInit(): void {

  }

  setLangCode(code: string) {
    this.langCode = code;
  }

}
