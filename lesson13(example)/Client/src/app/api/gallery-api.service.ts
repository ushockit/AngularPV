import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppEnvironment} from "../shared/app-environment.interface";
import {BrowserLocalStorage} from "../shared/storage/local-storage";
import {publishReplay, refCount} from "rxjs/operators";
import {Observable} from "rxjs";
import {CommentResponse} from "./comments-api.service";

export interface PhotoResponse {
  id: string;
  title: string;
  description: string;
  author: string;
  url: string;
  comments: CommentResponse[];
}

@Injectable()
export class GalleryApiService {
  readonly options = {
    headers: {
      'Authorization': `Bearer ${this.browserLocalStorage.getItem('accessToken')}`
    }
  };

  constructor(
    private readonly http: HttpClient,
    private readonly appEnv: AppEnvironment,
    private readonly browserLocalStorage: BrowserLocalStorage
  ) {
  }

  getAllPhotos(): Observable<PhotoResponse[]>{
    return this.http.get<PhotoResponse[]>(
      [
        this.appEnv.apiUrl,
        'gallery',
        'photos'
      ].join('/'),
      this.options
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
}
