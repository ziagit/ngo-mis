import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAssessmentsComponent } from './self-assessments.component';
import { InternalSelfAssessmentsComponent } from './components/internal-self-assessments/internal-self-assessments.component';
import { ExternalSelfAssessmentsComponent } from './components/external-self-assessments/external-self-assessments.component';
import { assessmentRouting } from './self-assessments.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SelfAssessmentsComponent, 
    InternalSelfAssessmentsComponent,
    ExternalSelfAssessmentsComponent
  ],
  imports: [
    CommonModule,
    assessmentRouting,
    SharedModule
  ]
})
export class SelfAssessmentsModule { }
