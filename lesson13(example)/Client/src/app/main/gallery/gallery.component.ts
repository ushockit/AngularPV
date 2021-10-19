import {Component, OnInit} from "@angular/core";
import {GalleryService, Photo} from "./gallery.service";
import {Observable} from "rxjs";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  photos$: Observable<Photo[]>;

  constructor(
    private readonly galleryService: GalleryService
  ) {
    this.photos$ = this.galleryService.getAllPhotos();
  }

  ngOnInit(): void {

  }
}
