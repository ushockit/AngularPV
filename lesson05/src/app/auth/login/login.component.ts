import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    }, {
      validators: [this.confirmPasswordValidator]
    });
  }

  onLoginClick() {
    console.log(this.form);
  }

  confirmPasswordValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      console.log(group);
      return {};
    };
  }
}
