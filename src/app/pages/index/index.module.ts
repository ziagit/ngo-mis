import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

import {TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing,

    ],
    declarations: [
        IndexComponent
    ],
    providers:[TranslateStore]
})
export class IndexModule { }
