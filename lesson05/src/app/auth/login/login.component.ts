import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    }, {
      validator: this.confirmPasswordValidator
    });
  }

  onLoginClick() {
    console.log(this.form);
  }

  confirmPasswordValidator(p: FormGroup) {
    console.log(p);
    return (group: FormGroup) => {
      console.log('validator')
      console.log(group);
    };
  }
}
