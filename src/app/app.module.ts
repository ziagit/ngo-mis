import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateStore,TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule, MatSortModule } from '@angular/material';



export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
  ],
  providers:[
    TranslateStore,
    
  ],
  declarations: [
    AppComponent,
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
