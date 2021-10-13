import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, take} from "rxjs/operators";
import {LoadingService} from "./common/services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson01';
  loading$ = this.loadingService.loading$;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingService: LoadingService
  ) {
  }

  demo() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      take(1)
    ).subscribe();
  }

  showLoader() {
    this.loadingService.show();
  }

  hideLoader() {
    this.loadingService.hide();
  }
}
