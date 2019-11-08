import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orgRouting } from './organization.routing';
import { MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { OrganizationComponent } from './organization.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { InActivitiesComponent } from './components/in-activities/in-activities.component';
import { DelegationsComponent } from './components/delegations/delegations.component';
import { TabActivitiesComponent } from './components/tab-activities/tab-activities.component';

import { PublicInfoComponent } from './components/public-info/public-info.component';
import { KeypersonsComponent } from './components/keypersons/keypersons.component';
import { AddressComponent } from './components/address/address.component';

import { AddDelegationsComponent } from './components/delegations/dialogs/add-delegations/add-delegations.component';
import { BankAccountsComponent } from './components/bank-accounts/bank-accounts.component';
import { AddAccountComponent } from './components/bank-accounts/dialogs/add-account/add-account.component';
import { BankEditComponent } from './components/bank-accounts/dialogs/bank-edit/bank-edit.component';
import { DeleteAccountComponent } from './components/bank-accounts/dialogs/delete-account/delete-account.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { AddKeypersonsComponent } from './components/keypersons/dialogs/add-keypersons/add-keypersons.component';
import { AddOrganizationAddressComponent } from './components/address/dialogs/add-organization-address/add-organization-address.component';
import { AddPublicInfoComponent } from './components/public-info/dialogs/add-public-info/add-public-info.component';
import { EditKeyspersonalOrgsComponent } from './components/keypersons/dialogs/edit-keyspersonal-orgs/edit-keyspersonal-orgs.component';
import { EditpublicInfoComponent } from './components/public-info/dialogs/editpublic-info/editpublic-info.component';
import { PublicInfoService } from './components/public-info/PublicInfoServices/public-info.service';
import { AddOrganizationComponent } from './components/org-list/dialogs/add-organization/add-organization.component';
import { DeleteOrganizationComponent } from './components/org-list/dialogs/delete-organization/delete-organization.component';


@NgModule({
  declarations: [
    OrgListComponent,
    BankAccountsComponent,
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
    DeleteOrganizationComponent,
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent,
    AddKeypersonsComponent,
    AddOrganizationAddressComponent,
    AddPublicInfoComponent,
   
  
    EditKeyspersonalOrgsComponent,
  
    EditpublicInfoComponent
    
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
  providers:[PublicInfoService],
  entryComponents:[
    AddOrganizationComponent,
    DeleteOrganizationComponent,
    AddAccountComponent,
    BankEditComponent,
    DeleteAccountComponent,
    AddKeypersonsComponent,
    AddOrganizationAddressComponent,
    
    EditKeyspersonalOrgsComponent,
    AddPublicInfoComponent,
    EditpublicInfoComponent,
  ]
})
export class OrganizationModule { }
