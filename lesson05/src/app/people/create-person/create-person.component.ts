import {Component, EventEmitter, Output} from '@angular/core';
import {
  AbstractControl,
  FormArray, FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Person} from "../person/person.component";
import {FormStatus} from "../../shared/enums/form-status.enum";


function birthValidator(min: Date, max: Date): ValidatorFn {
  return ((control: AbstractControl): ValidationErrors | null  => {
    const selectedDate: Date = new Date(control.value);
    let errors: ValidationErrors = {};

    [
      () => selectedDate < min ? 'mindate' : null,
      () => selectedDate > max ? 'maxdate' : null,
    ].forEach(action => {
      let validationResult = action();
      if (validationResult !== null) {
        errors[validationResult] = {
          value: selectedDate,
          minDate: min,
          maxDate: max
        };
      }
    });
    return Object.values(errors).length ? errors : null;
  });
}

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {
  form: FormGroup;
  positions: string[] = ['First', 'Second', 'Third'];
  @Output() createNewPersonEvent = new EventEmitter<Person>();

  constructor(private fb: FormBuilder) {
    // Создание формы при помощи FormBuilder
    // this.form = this.fb.group({
    //   'firstName': this.fb.control('Default', Validators.required),
    //   'lastName': this.fb.control(
    //     'Default',
    //     [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(12)
    //     ]),
    //   'birth': this.fb.control('2021-01-01', [
    //     Validators.required,
    //     birthValidator(new Date(1900, 1, 1), new Date())
    //   ]),
    //   'tags': this.fb.array([]),
    //   'position': this.fb.control('', Validators.required)
    // });
    this.form = this.fb.group({
      'firstName': this.fb.control('Default', Validators.required),
      'lastName': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]),
      'birth': new FormControl('2021-01-01', [
        Validators.required,
        birthValidator(new Date(1900, 1, 1), new Date())
      ]),
      'tags': new FormArray([]),
      'position': new FormControl('', Validators.required)
    });
    // Подписка на изменение состояния формы
    this.form.statusChanges.subscribe((status: string) => {
      // if (status == FormStatus.VALID) {
      //   console.log('valid');
      // }
      // console.log('Status changed: ', status);
    });
    // подписка на изменения значений в форме
    this.form.valueChanges.subscribe(res => {
      console.log('Value changed: ', res);
    });

    this.form.controls['tags'].valueChanges.subscribe((tags: string[]) => {
      // console.log('Tags changed: ', tags);
    });

    // TODO: Validation few controls
  }

  onCreatePersonClick() {
    if (this.form.valid) {
      const { birth } = this.form.value;
      const person: Person = this.form.value;
      person.birth = new Date(birth);
      this.form.reset();
      (this.form.controls['tags'] as FormArray).clear();
      this.createNewPersonEvent.emit(person);
    }
  }

  removeTag(idx: number) {
    (this.form.controls['tags'] as FormArray).controls.splice(idx, 1);
  }

  demo() {
    // this.form.patchValue({
    //   firstName: 'Updated'
    // }, { emitEvent: false });
    console.log(this.form);
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
