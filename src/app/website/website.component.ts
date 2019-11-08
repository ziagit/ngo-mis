import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  chosedLang:string;
  checkLang:boolean = true;
  constructor(public translate: TranslateService) {
    /*this.translate.addLangs(['da', 'en', 'ps']);*/
    
    if(localStorage.getItem('language')!=null){
       this.translate.setDefaultLang('da');   
     localStorage.setItem('language', 'da');
    }
    else{
      localStorage.setItem('language', localStorage.getItem('language'))
    }
   }
changeLang(event:string){
  if(event == 'da'){
    this.checkLang = true;
    this.chosedLang = event;
  }
  else{
    this.checkLang = false;
    this.chosedLang = event;
  }
  
}
  ngOnInit() {
  }

}
