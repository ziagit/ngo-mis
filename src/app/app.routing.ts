import { WebsiteComponent } from './website/website.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  {
    path: 'webpage',
    loadChildren: './website/website.module#WebsiteModule'
  },
  {
    path: '**',
    redirectTo: 'pages/index'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
