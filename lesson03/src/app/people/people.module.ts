import { NgModule } from '@angular/core';
import {PeopleComponent} from './people.component';
import {PersonComponent} from './person/person.component';
import {SharedModule} from "../shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    PeopleComponent
  ]
})
export class PeopleModule { }
