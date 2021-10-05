import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  ngOnDestroy(): void {
    console.log('HomeComponent, destroyed');
  }
}
