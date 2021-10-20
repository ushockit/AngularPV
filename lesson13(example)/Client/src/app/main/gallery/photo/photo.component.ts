import {Component, Input, OnInit} from "@angular/core";
import {Photo} from "../gallery.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'gallery-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor(
    private readonly router: Router,
  ) {

  }


  onShareClick(photo: Photo) {
    console.log(photo);
  }

  onEditClick() {
    this.router.navigate(['edit/photo', this.photo.id]);
  }

  ngOnInit(): void {
  }
}
