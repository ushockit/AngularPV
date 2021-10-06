import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy{

  constructor(
    private readonly router: Router
  ) {
    console.log('About constructor');
  }


  ngOnDestroy(): void {
    console.log('Destroy About Component');
  }
  navigateToContacts() {
    this.router.navigate(['/contacts']).then(() => {
      console.log('Navigate to contacts', this);
    });
  }
}
