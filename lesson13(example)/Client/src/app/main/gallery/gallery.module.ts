import {NgModule} from "@angular/core";
import {GalleryComponent} from "./gallery.component";
import {SharedModule} from "../../shared.module";
import {GalleryService} from "./gallery.service";
import {PhotoComponent} from "./photo/photo.component";

@NgModule({
  declarations: [
    GalleryComponent,
    PhotoComponent
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    GalleryService
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
