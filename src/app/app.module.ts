import { TranslateStore } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/settings/components/users-management/login/login.component';



export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    SharedModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers:[
    TranslateStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
