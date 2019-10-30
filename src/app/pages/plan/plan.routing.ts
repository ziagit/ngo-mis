import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './plan.component';

const planRoutes: Routes = [
    {
        path: '',
        component: PlanComponent,

    }
];

export const routing = RouterModule.forChild(planRoutes);
