import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly router: Router
  ) {
    this.router.events.subscribe(ev => {
      // console.log(ev);
      if (ev instanceof NavigationStart) {

      }
    });
  }

  demoNavigate() {
    this.router.navigate(['/contacts']);
  }
}
