import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
    ],
    declarations: [
        PagesComponent,
      
    ],
    providers:[]
})
export class PagesModule { }
