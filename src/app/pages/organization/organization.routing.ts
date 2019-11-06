import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';

const orgRoutes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        children: [
            { path: '', redirectTo: 'public-info', pathMatch: 'full' },
            { path: 'public-info', component: PublicInfoComponent },
            { path: 'keypersons', component: KeypersonsComponent },
            { path: 'address', component: AddressComponent },
            { path: 'activities', component: TabActivitiesComponent },
            { path: 'delegations', component: DelegationsComponent },
            { path: 'stepper', component: StepperComponent }
        ]
    }
];

export const orgRouting = RouterModule.forChild(orgRoutes);
