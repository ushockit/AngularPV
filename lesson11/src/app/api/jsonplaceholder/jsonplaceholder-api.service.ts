import {Injectable} from "@angular/core";
import {EnvironmentModel} from "../../../environments/environment.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, User} from "./interfaces";
import {publishReplay, refCount} from "rxjs/operators";




@Injectable()
export class JsonplaceholderApiService {
  constructor(
    private readonly env: EnvironmentModel,
    private readonly httpClient: HttpClient
  ) {
    console.log(env);
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      [
        this.env.jsonplaceholderAPI,
        'posts'
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    )
  }

  getPostById(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(
      [
        this.env.jsonplaceholderAPI,
        'posts',
        postId
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      [
        this.env.jsonplaceholderAPI,
        'users',
        userId
      ].join('/')
    ).pipe(
      publishReplay(1),
      refCount()
    );
  }
}
