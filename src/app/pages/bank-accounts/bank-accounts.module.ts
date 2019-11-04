import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts.component';
import { SharedModule } from '../../shared/shared.module';
import { BankRouting } from './bank-accounts.routing';
import { AddAccountComponent } from './dialogs/add-account/add-account.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { DeleteAccountComponent } from './dialogs/delete-account/delete-account.component';

@NgModule({
  declarations: [
    BankAccountsComponent,
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BankRouting

  ],
  entryComponents:[
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent
  ]
})
export class BankAccountsModule { }
