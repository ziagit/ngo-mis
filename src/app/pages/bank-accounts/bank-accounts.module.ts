import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts.component';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './bank-accounts.routing';

@NgModule({
  declarations: [
    BankAccountsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    routing
  ]
})
export class BankAccountsModule { }
