import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log(id);
    });

    this.activatedRoute.params.subscribe(params => {
      const id = Number(params.id);
      // TODO: Getting data
    });
  }
}
