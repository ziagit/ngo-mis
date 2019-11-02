import { Routes, RouterModule } from '@angular/router';
import { BankAccountsComponent } from './bank-accounts.component';

const routes: Routes = [
    {
        path: '',
        component: BankAccountsComponent,
    }
];

export const BankRouting = RouterModule.forChild(routes);

