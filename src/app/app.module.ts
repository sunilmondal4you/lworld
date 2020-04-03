import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { HomeComponent } from './home/home.component';
import { ObjectViewComponent } from './object-view/object-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
