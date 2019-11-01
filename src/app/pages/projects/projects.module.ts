import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { routing } from './projects.routing';
import { ProjectsComponent } from './projects.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
     EquipmentsComponent, 
     VehiclesComponent, 
     EmployeesComponent
    ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class ProjectsModule { }
