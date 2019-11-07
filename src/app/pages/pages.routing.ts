import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const childRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'organization', loadChildren: './organization/organization.module#OrganizationModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },            
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },            
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'website', loadChildren: './website-admin/website-admin.module#WebsiteAdminModule' }

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
