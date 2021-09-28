import { Component } from '@angular/core';
import {Person} from "./person/person.component";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[] = [
    {
      id: 1,
      firstName: 'First name 1',
      lastName: 'Last name 1',
      birth: new Date(1990, 10, 10),
      tags: ['tag1', 'tag2']
    },
    {
      id: 2,
      firstName: 'First name 2',
      lastName: 'Last name 2',
      birth: new Date(1993, 2, 20)
    }
  ];


  onCreatePerson(newPerson: Person) {
    this.people.push(newPerson);
  }
}
