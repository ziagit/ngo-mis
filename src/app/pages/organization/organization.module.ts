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
import { StepperComponent } from './components/stepper/stepper.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationComponent,
    /* OrgListComponent, */
    AssessmentComponent,
    ActivitiesComponent,
    InActivitiesComponent,
    DelegationsComponent,
    TabActivitiesComponent,
    StepperComponent,
    PublicInfoComponent,
    KeypersonsComponent,
    AddressComponent,
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
    StepperComponent
  ]
})
export class OrganizationModule { }
