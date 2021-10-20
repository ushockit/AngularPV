import {Component, Input} from "@angular/core";
import {CommentInterface} from "../gallery.service";

@Component({
  selector: 'photo-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: CommentInterface;
}
