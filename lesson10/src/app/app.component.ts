import { Component } from '@angular/core';
import {JsonplaceholderApiService} from "./api/jsonplaceholder/jsonplaceholder-api.service";
import {PostInterface} from "./api/jsonplaceholder/interfaces";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson10';
  posts$: Observable<PostInterface[]>;

  // @ts-ignore
  detailInfoOfPost$: Observable<PostInterface>;
  constructor(
    private readonly jsonplaceholderApiService: JsonplaceholderApiService
  ) {
    this.posts$ = jsonplaceholderApiService.getAllPosts();
  }

  postDetail(id: number | undefined) {
    this.detailInfoOfPost$ = this.jsonplaceholderApiService.getPost(Number(id));
  }

  demoPostQuery() {
    this.jsonplaceholderApiService.createPost({
      userId: 1,
      title: 'New title',
      body: 'New body'
    }).subscribe(res => console.log(res));
  }
}
