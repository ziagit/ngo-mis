import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { ModalsComponent } from '../ui/components/modals/modals.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { OrgListComponent } from './components/org-list/org-list.component';

const childRoutes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        children:[
            {path: '', redirectTo: 'org-list', pathMatch: 'full'},
            {path: 'org-list', component: OrgListComponent},
            {path: 'assessment', component: AssessmentComponent}
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
