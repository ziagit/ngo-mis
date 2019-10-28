import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap';
import { TranslateStore } from '@ngx-translate/core';


@NgModule({
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
  ],
  providers:[TranslateStore],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
