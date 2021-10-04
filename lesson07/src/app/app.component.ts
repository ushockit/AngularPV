import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, SimpleChanges} from '@angular/core';
import {State} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit {
  data: State = {
    value: 10,
    str: 'Hello'
  };

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  demo() {
    console.log('demo');
    this.data = {
      value: 100,
      str: 'Hi'
    };
  }
}
