import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { settingsRouting } from './settings.routing';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { ProvincesComponent } from './components/loopups/provinces/provinces.component';
import { SectorsComponent } from './components/loopups/sectors/sectors.component';
import { DistrictsComponent } from './components/loopups/districts/districts.component';
import { LookupsComponent } from './components/loopups/lookups.component';
import { TypesComponent } from './components/types/types.component';
import { BudjetTypesComponent } from './components/types/budjet-types/budjet-types.component';
import { AssessmentTypesComponent } from './components/types/assessment-types/assessment-types.component';
import { DelegationTypesComponent } from './components/types/delegation-types/delegation-types.component';
import { EmployeeTypesComponent } from './components/types/employee-types/employee-types.component';
import { EquipmentTypesComponent } from './components/types/equipment-types/equipment-types.component';
import { OrganizationTypesComponent } from './components/types/organization-types/organization-types.component';

import { MonitorsComponent } from './components/loopups/monitors/monitors.component';
import { RelatedGoalsComponent } from './components/loopups/related-goals/related-goals.component';
import { RelatedTargetsComponent } from './components/loopups/related-targets/related-targets.component';
import { AddTypesComponent } from './components/types/dialogs/add-types/add-types.component';
import { AddOrganizationTypeComponent } from './components/types/organization-types/dialogType/add-organization-type/add-organization-type.component';
import { AddEquiptTypeComponent } from './components/types/equipment-types/equiptTypeDialog/add-equipt-type/add-equipt-type.component';
import { BTypeDialogComponent } from './components/types/budjet-types/budjetTypeDialog/b-type-dialog/b-type-dialog.component';
import { DelTypeDialogComponent } from './components/types/delegation-types/delegationTypeDialog/del-type-dialog/del-type-dialog.component';
import { DiologEmpTypeComponent } from './components/types/employee-types/empTypeDialog/diolog-emp-type/diolog-emp-type.component';
import { EditBudjetTypeComponent } from './components/types/budjet-types/budjetTypeDialog/edit-budjet-type/edit-budjet-type.component';
import { AddUserComponent } from './components/users-management/dialogs/add-user/add-user.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './components/users-management/register/register.component';
import { EditDelTypeDiologComponent } from './components/types/delegation-types/delegationTypeDialog/edit-del-type-diolog/edit-del-type-diolog.component';
import { EditEmpTypeComponent } from './components/types/employee-types/empTypeDialog/edit-emp-type/edit-emp-type.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    UsersManagementComponent,
    ProvincesComponent,
    DistrictsComponent,
    SectorsComponent,
    LookupsComponent,
    TypesComponent,
    BudjetTypesComponent,
    AssessmentTypesComponent,
    DelegationTypesComponent,
    EmployeeTypesComponent,
    EquipmentTypesComponent,
    OrganizationTypesComponent,
    MonitorsComponent,
    RelatedGoalsComponent,
    RelatedTargetsComponent,
    AddTypesComponent,
    AddOrganizationTypeComponent,
   
    AddEquiptTypeComponent,
   
    BTypeDialogComponent,
   
    DelTypeDialogComponent,
   
    DiologEmpTypeComponent,
   
    EditBudjetTypeComponent,
   
    
    AddUserComponent,
   
    
    EditDelTypeDiologComponent,
   
    
    EditEmpTypeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    settingsRouting
  ],
  entryComponents:[
    AddOrganizationTypeComponent,
    AddEquiptTypeComponent,
    AddOrganizationTypeComponent,
    BTypeDialogComponent,
    DelTypeDialogComponent,
    DiologEmpTypeComponent,
    AddUserComponent,
    EditBudjetTypeComponent,
    EditDelTypeDiologComponent,
    EditEmpTypeComponent,
    
    
  ],
  providers: [
   
  ],

})
export class SettingsModule {
 

 }
