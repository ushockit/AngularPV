import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../person/person.component";

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {
  form: FormGroup;
  positions: string[] = ['First', 'Second', 'Third'];
  @Output() createNewPersonEvent = new EventEmitter<Person>();

  constructor() {
    // инициализация компонентов формы
    this.form = new FormGroup({
      'firstName': new FormControl('Default', Validators.required),
      'lastName': new FormControl(
        'Default',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]),
      'birth': new FormControl('2000-10-10', Validators.required),
      'tags': new FormArray([]),
      'position': new FormControl('', Validators.required)
    });
  }

  onCreatePersonClick() {
    if (this.form.valid) {
      const { birth } = this.form.value;
      const person: Person = this.form.value;
      person.birth = new Date(birth);
      this.form.reset();
      (this.form.controls['tags'] as FormArray).clear();
      this.createNewPersonEvent.emit(person);
      // const { firstName, lastName, birth } = this.form.value;
      // console.log(firstName);
      // console.log(lastName);
      // console.log(birth);
    }
  }

  removeTag(idx: number) {
    (this.form.controls['tags'] as FormArray).controls.splice(idx, 1);
  }

  demo() {
    this.form.patchValue({
      firstName: 'Updated'
    }, { emitEvent: false });
  }

  get firstNameControl() {
    return this.form.controls.firstName;
  }

  get tagsControls(): FormArray {
    return this.form.controls['tags'] as FormArray;
  }

  addTag() {
    (<FormArray>this.form.controls['tags']).push(new FormControl('', Validators.required));
  }
}
