import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langCondition: boolean = true;
  lang2:any;
  @Output() setLang = new EventEmitter<string>();
  constructor(private translate: TranslateService) { 
    
    console.log("sesstion in header set to: ", localStorage.getItem('language'))
    
  }

  ngOnInit() {
  }

  setLanguage(lang) {
    if (lang == 'da') {
      this.langCondition = true;
      localStorage.setItem('language', lang)
      this.setLang.emit(lang);
      this.translate.use(localStorage.getItem('language'));
    } else if (lang == 'en') {
      this.langCondition = false;
      localStorage.setItem('language', lang)
      this.setLang.emit(lang);
      this.translate.use(localStorage.getItem('language'))
    }  
    else {
      this.langCondition = true;
      localStorage.use(localStorage.getItem('language'))
    }  
  }
}
