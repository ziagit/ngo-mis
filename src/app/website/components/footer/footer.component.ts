import { LangServiceService } from './../lang-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() myVar: string;
  constructor(private langService: LangServiceService) {
      console.log("inside footer", this.myVar)
   }

  ngOnInit() {
  }

}
