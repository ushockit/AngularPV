import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ServicesApiModule} from "./api/services-api.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
