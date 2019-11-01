import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { routing } from './projects.routing';
import { ProjectsComponent } from './projects.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddProjectComponent } from './components/dialogs/add-project/add-project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
     EquipmentsComponent, 
     VehiclesComponent, 
     EmployeesComponent, 
     AddProjectComponent
    ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  entryComponents:[AddProjectComponent]
  
})
export class ProjectsModule { }
