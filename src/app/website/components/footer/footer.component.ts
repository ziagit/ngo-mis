import { TranslateService } from '@ngx-translate/core';
import { LangServiceService } from './../lang-service.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() myVar: string= 'da';
  langCondition:boolean=true;

  constructor(private langService: LangServiceService, private translate: TranslateService) {
    console.log("From parent: ", this.myVar)
    if(this.myVar == 'da'){
      this.langCondition = true;
    }else{
      this.langCondition = false;
    }
  }

  ngOnInit() {
  }

}
