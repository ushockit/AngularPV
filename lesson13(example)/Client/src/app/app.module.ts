import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {MainModule} from "./main/main.module";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AppEnvironment} from "./shared/app-environment.interface";
import { environment } from '../environments/environment';
import {ApiServicesModule} from "./api/api-services.module";
import {BrowserLocalStorage} from "./shared/storage/local-storage";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {QueryHttpInterceptor} from "./shared/http/query-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    MainModule,
    ApiServicesModule
  ],
  providers: [
    AuthGuard,
    BrowserLocalStorage,
    {
      provide: AppEnvironment,
      useValue: environment
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QueryHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
