import { Routes, RouterModule } from '@angular/router';
import { SelfAssessmentsComponent } from './self-assessments.component';
import { InternalSelfAssessmentsComponent } from './components/internal-self-assessments/internal-self-assessments.component';
import { ExternalSelfAssessmentsComponent } from './components/external-self-assessments/external-self-assessments.component';


const routes: Routes = [
    {
        path: '',
        component: SelfAssessmentsComponent,
        children: [
            { path: '', redirectTo: 'internal-self-assessment', pathMatch: 'full' },
            { path: 'internal-self-assessment', component: InternalSelfAssessmentsComponent },
            { path: 'external-self-assessment', component: ExternalSelfAssessmentsComponent},
        ]
    }
];

export const assessmentRouting = RouterModule.forChild(routes);
