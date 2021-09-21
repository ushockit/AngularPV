import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson01';
  welcome = 'Hello, Angular!';
  classes = ['first', 'second'];
  classes2 = 'first second';
  isActive = false;
  styles = {
    color: 'red',
    background: 'gray'
  };

  @ViewChild('welcomeDiv') divElmt: ElementRef;


  onBtnClick(ev: any) {
    console.log(this.divElmt.nativeElement);
    console.log(ev);
    console.log('Button click');
    this.isActive = !this.isActive;
  }
}
