import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ErrorComponent} from "./error/error.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {RecordsComponent} from "./records/records.component";
import {AddNewRecordComponent} from "./records/add-new-record/add-new-record.component";
import {EditRecordComponent} from "./records/edit-record/edit-record.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home'
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts/:id',
    component: ContactsComponent
  },
  {
    path: 'records',
    component: RecordsComponent,
    children: [
      {
        path: 'add',
        component: AddNewRecordComponent
      },
      {
        path: 'edit/:id',
        component: EditRecordComponent
      }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
