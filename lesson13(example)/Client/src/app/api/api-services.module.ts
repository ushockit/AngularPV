import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationApiService} from "./authentication-api.service";
import {GalleryApiService} from "./gallery-api.service";
import {CommentsApiService} from "./comments-api.service";

@NgModule({
  declarations: [

  ],
  providers: [
    AuthenticationApiService,
    GalleryApiService,
    CommentsApiService
  ],
  imports: [
    HttpClientModule
  ],
})
export class ApiServicesModule { }
