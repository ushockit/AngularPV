import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {JsonplaceholderApiService} from "./jsonplaceholder/jsonplaceholder-api.service";

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    JsonplaceholderApiService
  ],
  exports: []
})
export class ServicesApiModule { }
