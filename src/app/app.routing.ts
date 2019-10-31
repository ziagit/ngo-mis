import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  { path: 'website', loadChildren: './webiste/website.module#websiteRouting'},

  {
    path: '**',
    redirectTo: 'pages/index'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
