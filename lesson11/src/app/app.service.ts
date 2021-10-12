import {Injectable} from "@angular/core";
import {JsonplaceholderApiService} from "./api/jsonplaceholder/jsonplaceholder-api.service";
import {Observable, of} from "rxjs";
import {Post, User} from "./api/jsonplaceholder/interfaces";
import {PostInterface} from "./interfaces/post.interface";
import {map, switchMap} from "rxjs/operators";

@Injectable()
export class AppService {
  posts$: Observable<PostInterface[]>

  constructor(
    private readonly jsonplaceholderApiService: JsonplaceholderApiService
  ) {
    this.posts$ = this.jsonplaceholderApiService.getAllPosts().pipe(
      map(posts => posts.map(p => ({
        id: p.id,
        body: p.body,
        title: p.title,
        user: null
      }) as PostInterface))
    )
  }

  getPost(id: number): Observable<PostInterface> {
    return this.jsonplaceholderApiService.getPostById(id).pipe(
      switchMap((post: Post) => {
        return this.jsonplaceholderApiService.getUserById(post.userId).pipe(
          map((user: User) => ({ post, user }))
        );
      }),
      map(({ post, user }) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          username: user.username
        }
      }))
    );
  }
}
