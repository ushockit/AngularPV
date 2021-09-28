import {Component, Input} from '@angular/core';

export interface Person {
  id?: number;
  firstName: string;
  lastName: string;
  birth: Date;
  tags?: string[];
  position?: string;
}

@Component({
  selector: 'app-people-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person = {
    birth: new Date(),
    lastName: '',
    firstName: ''
  };
}
