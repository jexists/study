import { Component, OnInit } from '@angular/core';

import { I18nSupportService } from '../i18n-support.service';
import { LANG_METADATA } from '../lang-metadata';
@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {

  langMetaData = LANG_METADATA;
  langCode: string;

  constructor(
    public i18nSupporter: I18nSupportService, 
  ) {
    this.langCode = i18nSupporter.langCode;
  }

  ngOnInit(): void {
    console.log(this.langCode);
    
  }

  setLangCode(code: string) {
    this.langCode = code;
    this.i18nSupporter.langCode = code;
    console.log(this.langCode);
    
  }

}
