import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'organization', loadChildren: './organization/organization.module#OrganizationModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule'},
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
            { path: 'plan', loadChildren: './plan/plan.module#PlanModule'},
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
            { path: 'banck-accounts', loadChildren: './bank-accounts/bank-accounts.module#BankAccountsModule'}
            
            { path: 'banck-accounts', loadChildren: './bank-accounts/bank-accounts.module#BankAccountsModule'},
            {path: 'website', loadChildren: './website-admin/website-admin.module#WebsiteAdminModule'}

            
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
