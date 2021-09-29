import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  exports: [AuthComponent]
})
export class AuthModule { }
