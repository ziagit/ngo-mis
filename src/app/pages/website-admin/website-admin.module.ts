import { SharedModule } from './../../shared/shared.module';
import { routing } from './website-admin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteAdminComponent } from './website-admin.component';
import { BiographyComponent } from './components/home/biography/biography.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SlideshowsComponent } from './components/home/slideshows/slideshows.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { OrgRegisterationComponent } from './components/org-registeration/org-registeration.component';
import { NewsComponent } from './components/news/news.component';
import { NewsTypesComponent } from './components/news/news-types/news-types.component';
import { RegisterationReasonsComponent } from './components/org-registeration/registeration-reasons/registeration-reasons.component';
import { RegisterationGuidComponent } from './components/org-registeration/registeration-guid/registeration-guid.component';
import { PhonesComponent } from './components/contact-us/phones/phones.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { OrganizationLawsComponent } from './components/organization-laws/organization-laws.component';
import { VideosComponent } from './components/news/videos/videos.component';
import { GalleriesComponent } from './components/news/galleries/galleries.component';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/contact-us/address/address.component';

@NgModule({
  declarations: [
    WebsiteAdminComponent, 
    BiographyComponent, 
    AboutUsComponent, 
    SlideshowsComponent, 
    ContactUsComponent, 
    GalleriesComponent, 
    VideosComponent, 
    OrganizationLawsComponent, 
    JobsComponent, 
    PhonesComponent, 
    RegisterationGuidComponent, 
    RegisterationReasonsComponent, 
    NewsTypesComponent, 
    OrgRegisterationComponent,
    NewsComponent,
    HomeComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class WebsiteAdminModule { }
