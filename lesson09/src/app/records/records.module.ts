import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RecordsComponent} from "./records.component";
import {AddNewRecordComponent} from "./add-new-record/add-new-record.component";
import {EditRecordComponent} from "./edit-record/edit-record.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    RecordsComponent,
    AddNewRecordComponent,
    EditRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [RecordsComponent]
})
export class RecordsModule { }
