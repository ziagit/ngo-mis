import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { routing } from './plan.routing';
import { PlanService } from './plan.service';

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers:[
    PlanService
  ]
})
export class PlanModule { }
