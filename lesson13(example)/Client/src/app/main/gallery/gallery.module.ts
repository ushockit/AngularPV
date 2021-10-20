import {NgModule} from "@angular/core";
import {GalleryComponent} from "./gallery.component";
import {SharedModule} from "../../shared.module";
import {GalleryService} from "./gallery.service";
import {PhotoComponent} from "./photo/photo.component";
import {CommentComponent} from "./comment/comment.component";
import {PhotoEditComponent} from "./photo/photo-edit/photo-edit.component";
import {CommentEditComponent} from "./comment/comment-edit/comment-edit.component";

@NgModule({
  declarations: [
    GalleryComponent,
    PhotoComponent,
    CommentComponent,
    PhotoEditComponent,
    CommentEditComponent
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
