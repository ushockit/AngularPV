import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'dashboard-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class DashboardItemsComponent{
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    });
  }
}
