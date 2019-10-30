import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './settings.routing';
import { SettingsComponent } from './settings.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { ProvincesComponent } from './components/provinces/provinces.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { TypesComponent } from './components/types/types.component';
import { AssessmentTypesComponent } from './components/types/assessment-types/assessment-types.component';
import { BudjetTypesComponent } from './components/types/budjet-types/budjet-types.component';
import { DelegationTypesComponent } from './components/types/delegation-types/delegation-types.component';
import { EmployeeTypesComponent } from './components/types/employee-types/employee-types.component';
import { EquipmentTypesComponent } from './components/types/equipment-types/equipment-types.component';
import { OrganizationTypesComponent } from './components/types/organization-types/organization-types.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersManagementComponent } from './components/users-management/users-management.component';

@NgModule({
  declarations: [
    SettingsComponent,
    DistrictsComponent,
    ProvincesComponent,
    SectorsComponent,
    TypesComponent,
    AssessmentTypesComponent,
    BudjetTypesComponent,
    DelegationTypesComponent,
    EmployeeTypesComponent,
    EquipmentTypesComponent,
    OrganizationTypesComponent,
    UsersManagementComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class SettingsModule { }
