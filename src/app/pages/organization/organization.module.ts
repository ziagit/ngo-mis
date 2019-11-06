import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orgRouting } from './organization.routing';
import { MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddOrganizationComponent } from './dialogs/add-organization/add-organization.component';
import { OrganizationComponent } from './organization.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { InActivitiesComponent } from './components/in-activities/in-activities.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';

import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';

import { AddDelegationsComponent } from './dialogs/add-delegations/add-delegations.component';
import { DeleteOrganizationComponent } from './dialogs/delete-organization/delete-organization.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationComponent,
    AssessmentComponent,
    ActivitiesComponent,
    InActivitiesComponent,
    DelegationsComponent,
    TabActivitiesComponent,
    PublicInfoComponent,
    KeypersonsComponent,
    AddressComponent,
    AddDelegationsComponent,
    DeleteOrganizationComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    CommonModule,
    orgRouting,
    SharedModule
  ],
  entryComponents:[
    AddOrganizationComponent,
    DeleteOrganizationComponent
  ]
})
export class OrganizationModule { }
