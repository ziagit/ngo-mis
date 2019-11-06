import { WebsiteComponent } from './website/website.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/settings/components/users-management/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },

  { 
    path: 'website', loadChildren: './website/website.module#WebsiteModule' 
  },
  {
    path: 'webpage',
    loadChildren: './website/website.module#WebsiteModule'
  },
  {
    path: '**',
    redirectTo: 'pages/index'
  },
];

export const routing = RouterModule.forRoot(appRoutes);
