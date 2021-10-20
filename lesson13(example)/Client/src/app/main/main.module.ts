import { NgModule } from '@angular/core';
import {SharedModule} from "../shared.module";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {GalleryModule} from "./gallery/gallery.module";
import {GalleryComponent} from "./gallery/gallery.component";
import {PhotoEditComponent} from "./gallery/photo/photo-edit/photo-edit.component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    GalleryModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'gallery',
            component: GalleryComponent,
          },
          {
            path: 'edit/photo/:id',
            component: PhotoEditComponent
          }
        ]
      }
    ])
  ]
})
export class MainModule { }
