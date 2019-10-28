import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './organization.routing';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { AddOrganizationComponent } from './dialogs/add-organization/add-organization.component';
import { OrganizationComponent } from './organization.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { AssessmentComponent } from './components/assessment/assessment.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationComponent,
    OrgListComponent,
    AssessmentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    CommonModule,
    routing,
    SharedModule
  ],
  entryComponents:[AddOrganizationComponent]
})
export class OrganizationModule { }
