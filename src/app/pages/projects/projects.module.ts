import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { routing } from './projects.routing';
import { ProjectsComponent } from './projects.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddProjectComponent } from './components/dialogs/add-project/add-project.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectService } from './services/project.service';
import { RefreshService } from './services/refresh.service';
import { EditProjectComponent } from './components/dialogs/edit-project/edit-project.component';
import { DeleteProjectComponent } from './components/dialogs/delete-project/delete-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
     EquipmentsComponent, 
     VehiclesComponent, 
     EmployeesComponent, 
     AddProjectComponent,
     EditProjectComponent,
     DeleteProjectComponent
    ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  providers:[
    ProjectService,
    RefreshService
  ],
  entryComponents:[AddProjectComponent,EditProjectComponent,DeleteProjectComponent]
  
})
export class ProjectsModule { }
