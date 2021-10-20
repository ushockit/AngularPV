import {Injectable} from "@angular/core";
import {GalleryApiService, PhotoResponse} from "../../api/gallery-api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface PhotoModelData {
  id?: string;
  title: string;
  description: string;
  author: string;
  url: string;
  comments: CommentInterface[];
}

export interface Photo extends PhotoModelData {}

export class Photo {
  get hasComments() {
    return this.comments.length > 0;
  }
}

export interface CommentInterface {
  id?: string;
  text: string;
  createdAt: Date;
}

@Injectable()
export class GalleryService {
  constructor(
    private readonly galleryService: GalleryApiService
  ) {
  }

  getAllPhotos(): Observable<Photo[]> {
    return this.galleryService.getAllPhotos().pipe(
      map((photos: PhotoResponse[]) => {
        return photos.map(photo => {
          // TODO: Factory
          return Object.assign(new Photo(), photo);
        })
      })
    );
  }

  getPhoto(id: string): Observable<Photo> {
    return this.galleryService.getPhotoById(id).pipe(
      map((photo: PhotoResponse) => {
        // TODO: Factory
        return Object.assign(new Photo(), photo);
      })
    );
  }
}
