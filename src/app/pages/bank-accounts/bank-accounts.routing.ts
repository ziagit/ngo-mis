import { Routes, RouterModule } from '@angular/router';
import { BankAccountsComponent } from './bank-accounts.component';

const orgRoutes: Routes = [
    {
        path: '',
        component: BankAccountsComponent,
        children:[
            {path: '', redirectTo: 'org-list', pathMatch: 'full'},

        ]
    }
];

export const orgRouting = RouterModule.forChild(orgRoutes);
