import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

// enum Sex {
//   Male,
//   Female,
//   Unknown
// }

type Sex = 'мужской' | 'женский' | 'неопределен';

export interface Person {
  firstName: string;
  lastName: string;
  birth: Date;
  sex: Sex;
  active: boolean;
  passport?: { series: string; num: number };
  // sex: 'мужской' | 'женский' | 'неопределен';
}

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person = {
    firstName: '',
    lastName: '',
    birth: new Date(1990, 10, 10),
    // sex: Sex.Unknown
    sex: "неопределен",
    active: true
  };

  @ViewChild('h3Title') h3TitleRef: ElementRef;


  constructor() {

  }

  onDemoClick() {
    const elmt = <HTMLElement>this.h3TitleRef.nativeElement;
    elmt.classList.add('hi');
    this.h3TitleRef.nativeElement.style.color = 'red'
  }

  // get personSex(): string {
    // let sexStr = '';
    // switch (String(Object.values(Sex)[this.person.sex])) {
    //   case 'Male':
    //     sexStr = 'Мужской';
    //     break;
    //   case 'Female':
    //     sexStr = 'Женский';
    //     break;
    //   case 'Unknown':
    //     sexStr = 'Неопределен';
    //     break;
    // }
    // return sexStr;
    // return String(Object.values(Sex)[this.person.sex]);
  // }
}
