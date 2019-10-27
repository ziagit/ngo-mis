import { Component, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import { GlobalService } from '../../services/global.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})
export class MenuComponent {
  @Input() menuInfo: any;

  constructor(private _globalService: GlobalService, private translate: TranslateService) { 

    translate.get(['HOME', 'MY_ACCOUNT', 'CHANGE_PASSWORD']).subscribe(translations => {
      console.log(translations.HOME, translations.MY_ACCOUNT, translations.CHANGE_PASSWORD)
    })
  }

  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}