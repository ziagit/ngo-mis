import { WebsiteAdminComponent } from './website-admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BiographyComponent } from './components/biography/biography.component';
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SlideshowsComponent } from './components/slideshows/slideshows.component';


const routes: Routes = [
    {
        path: '',
        component: WebsiteAdminComponent,
        children: [
            { path: '', redirectTo: 'web', pathMatch: 'full' },
            { path: 'biography', component: BiographyComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: 'slideshows', component: SlideshowsComponent }

        ]
    }
]
export const routing = RouterModule.forChild(routes);