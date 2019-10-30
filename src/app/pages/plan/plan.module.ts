import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { routing } from './plan.routing';

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class PlanModule { }
