import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationApiService} from "./authentication-api.service";

@NgModule({
  declarations: [

  ],
  providers: [
    AuthenticationApiService
  ],
  imports: [
    HttpClientModule
  ],
})
export class ApiServicesModule { }
