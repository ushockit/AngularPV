import {Component, Input} from "@angular/core";
import {Photo} from "../gallery.service";

@Component({
  selector: 'gallery-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: Photo;

  onShareClick(photo: Photo) {
    console.log(photo);
  }
}
