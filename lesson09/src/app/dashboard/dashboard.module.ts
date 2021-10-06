import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {DashboardHomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {DashboardItemsComponent} from "./items/items.component";
import {DashboardRoutingModule} from "./dashboard.routing.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardItemsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: [DashboardComponent]
})
export class DashboardModule { }
