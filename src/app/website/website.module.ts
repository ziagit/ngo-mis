import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import {websiteRouting} from './website.routing';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    websiteRouting
  ]
})
export class WebsiteModule { }
