import { Routes, RouterModule } from "@angular/router";
import { SettingsComponent } from './settings.component';

import { UsersManagementComponent } from './components/users-management/users-management.component';
import { LookupsComponent } from './components/loopups/lookups.component';
import { TypesComponent } from './components/types/types.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            { path: '', redirectTo: 'lookups', pathMatch: 'full' },
            { path: 'lookups', component: LookupsComponent },
            { path: 'types', component: TypesComponent },
            { path: 'users-management', component: UsersManagementComponent },
        ]
    }
]
export const settingsRouting = RouterModule.forChild(routes);