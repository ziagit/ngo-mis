import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langCondition=false;

  @Output() selectedLang = new EventEmitter<string>();
  constructor() {
    console.log("language x: ", sessionStorage.getItem('language'))
    if(sessionStorage.getItem('language') == 'en'){
        this.langCondition=true;
    }
   }

  ngOnInit() {
  }

 setLanguage(lang){
   if(lang == 'da'? this.langCondition=true : this.langCondition=false){}
   sessionStorage.setItem("language", lang);
    /*this.selectedLang.emit(lang);*/
 }
}
