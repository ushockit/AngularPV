import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DashboardHomeComponent} from "./home/home.component";
import {DashboardItemsComponent} from "./items/items.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: DashboardHomeComponent
      },
      {
        path: 'items',
        component: DashboardItemsComponent,
        data: {
          yearsBeforeRegistration: 1
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
