import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { NewsComponent } from './components/news/news.component';
import { BiographyComponent } from './components/biography/biography.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { websiteRouting } from './website.routing';

@NgModule({
  declarations: [
    WebsiteComponent, 
    HeaderComponent, 
    NavbarComponent, 
    SlideshowComponent, 
    NewsComponent, 
    BiographyComponent, 
    AboutUsComponent, 
    FooterComponent
    ],

  imports: [
    CommonModule,
    websiteRouting
  ]
})
export class WebsiteModule { }
