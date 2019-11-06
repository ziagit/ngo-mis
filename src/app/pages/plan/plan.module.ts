import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { routing } from './plan.routing';
import { PlanService } from './plan.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  providers:[
    PlanService
  ]
})
export class PlanModule { }
