import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orgRouting } from './organization.routing';
import { MatFormFieldModule, MatGridListModule, MatCardModule } from '@angular/material';
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
 


// Import NgbModule library
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddActivitesComponent } from './dialogs/add-activites/add-activites.component';
import { AddDelegationsComponent } from './dialogs/add-delegations/add-delegations.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationComponent,
    OrgListComponent,
    AssessmentComponent,
    ActivitiesComponent,
    InActivitiesComponent,
    DelegationsComponent,
    TabActivitiesComponent,
    AddActivitesComponent,
    AddDelegationsComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    CommonModule,
    orgRouting,
    SharedModule,
 
     // Specify NgbModule library as an import
     NgbModule.forRoot(),
     

  ],
  entryComponents:[AddOrganizationComponent]
})
export class OrganizationModule { }
