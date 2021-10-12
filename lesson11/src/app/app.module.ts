import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ServicesApiModule} from "./api/services-api.module";
import {EnvironmentModel} from "../environments/environment.model";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServicesApiModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    {
      provide: EnvironmentModel,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
