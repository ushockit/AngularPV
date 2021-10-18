import { NgModule } from '@angular/core';
import {SharedModule} from "../shared.module";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ])
  ]
})
export class MainModule { }
