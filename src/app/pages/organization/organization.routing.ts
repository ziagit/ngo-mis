import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';

const orgRoutes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        children:[
            {path: '', redirectTo: 'org-list', pathMatch: 'full'},
            {path: 'org-list', component: OrgListComponent},
            {path: 'activities', component: TabActivitiesComponent},
            {path: 'delegations', component: DelegationsComponent},
        ]
    }
];

export const orgRouting = RouterModule.forChild(orgRoutes);
