import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts.component';
import { SharedModule } from '../../shared/shared.module';
import { BankRouting } from './bank-accounts.routing';
import { AddAccountComponent } from './dialogs/add-account/add-account.component';


@NgModule({
  declarations: [
    BankAccountsComponent,
    AddAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BankRouting

  ],
  entryComponents:[
    AddAccountComponent
  ]
})
export class BankAccountsModule { }
