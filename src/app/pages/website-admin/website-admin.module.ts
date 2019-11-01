import { SharedModule } from './../../shared/shared.module';
import { routing } from './website-admin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteAdminComponent } from './website-admin.component';
import { BiographyComponent } from './components/biography/biography.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SlideshowsComponent } from './components/slideshows/slideshows.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    WebsiteAdminComponent, 
    BiographyComponent, 
    AboutUsComponent, SlideshowsComponent, ContactUsComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class WebsiteAdminModule { }
