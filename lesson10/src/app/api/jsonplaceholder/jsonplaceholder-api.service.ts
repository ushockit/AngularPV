import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs";
import {PostInterface} from "./interfaces";

@Injectable()
export class JsonplaceholderApiService {
  readonly apiUrl: string = '';
  constructor(
    private readonly httpClient: HttpClient
  ) {
    console.log(httpClient);
    this.apiUrl = environment.apiURL;
  }

  getAllPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>([this.apiUrl, 'posts'].join('/'));
  }

  getPost(id: number): Observable<PostInterface> {
    return this.httpClient.get<PostInterface>(
      [
        this.apiUrl,
        'posts',
        id
      ].join('/')
    );
  }

  createPost(post: PostInterface): Observable<PostInterface> {
    return this.httpClient.post<PostInterface>(
      [
        this.apiUrl,
        'posts'
      ].join('/'),
      post
    );
  }
}
