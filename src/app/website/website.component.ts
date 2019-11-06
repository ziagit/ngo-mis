import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  chosedLang:string;
  constructor(public translate: TranslateService) {
    
    this.translate.setDefaultLang('da'); 
    
   }
changeLang(event:string){
  
  console.log("insdie parrent: ", event)
  this.chosedLang = "hello.";
}
  ngOnInit() {
  }

}
