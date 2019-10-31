import { WebsiteComponent } from './website.component';
import { Routes, RouterModule } from '@angular/router';

const websiteRoutes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: WebsiteComponent}
];
export const websiteRouting = RouterModule.forChild(websiteRoutes);
