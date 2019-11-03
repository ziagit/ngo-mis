import { WebsiteComponent } from './website.component';
import { Routes, RouterModule } from '@angular/router';

const webRoutes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
      path: 'index', component: WebsiteComponent
  }
];

export const websiteRouting = RouterModule.forChild(webRoutes);
