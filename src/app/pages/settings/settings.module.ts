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
import { AddProvinceComponent } from './components/loopups/provinces/dialogs/add-province/add-province.component';
import { AddDistrictComponent } from './components/loopups/districts/dialogs/add-district/add-district.component';
import { AddSectoreComponent } from './components/loopups/sectors/dialogs/add-sectore/add-sectore.component';
import { AddRelatedGoalComponent } from './components/loopups/related-goals/dialogs/add-related-goal/add-related-goal.component';
import { AddRelatedTargetComponent } from './components/loopups/related-targets/dialoags/add-related-target/add-related-target.component';
import { EditProvinceComponent } from './components/loopups/provinces/dialogs/edit-province/edit-province.component';
import { EditDistrictComponent } from './components/loopups/districts/dialogs/edit-district/edit-district.component';
import { EditSectoreComponent } from './components/loopups/sectors/dialogs/edit-sectore/edit-sectore.component';
import { EditRelatedGoalComponent } from './components/loopups/related-goals/dialogs/edit-related-goal/edit-related-goal.component';
import { EditRelatedTargetComponent } from './components/loopups/related-targets/dialoags/edit-related-target/edit-related-target.component';



@NgModule({
  declarations: [
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
    AddProvinceComponent,
    AddDistrictComponent,
    AddSectoreComponent,
    AddRelatedGoalComponent,
    AddRelatedTargetComponent,
    EditProvinceComponent,
    EditDistrictComponent,
    EditSectoreComponent,
    EditRelatedGoalComponent,
    EditRelatedTargetComponent,
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    settingsRouting
  ],
  
  entryComponents:
   [
    AddProvinceComponent,
    AddDistrictComponent,
    AddSectoreComponent,
    AddRelatedGoalComponent,
    AddRelatedTargetComponent,
    EditProvinceComponent,
    EditDistrictComponent,
    EditSectoreComponent,
    EditRelatedGoalComponent,
    EditRelatedTargetComponent
  ]

})
export class SettingsModule { }
