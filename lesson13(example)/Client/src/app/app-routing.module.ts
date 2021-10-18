import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication'
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
