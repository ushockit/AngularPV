import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = fb.group({
      'email': fb.control('', Validators.required),
      'password': fb.control('', Validators.required),
      'confirmPassword': fb.control('', Validators.required),
    });

    const pswdControl = this.getControl('password');
    const confirmPswdControl = this.getControl('confirmPassword');

    confirmPswdControl.valueChanges.subscribe((confirmPswd: string) => {
      const pswd: string = pswdControl.value;

      if (confirmPswd !== pswd) {
        confirmPswdControl.setErrors({ passwordMatch: { password: pswd, confirmPassword: confirmPswd } });
      } else {
        confirmPswdControl.setErrors(null);
      }
    });
  }

  onLoginClick() {
    if (this.loginForm.valid) {
      const { email } = this.loginForm.value;
      if (this.authService.login(email)) {
        this.message = 'Успешно';
      } else {
        this.message = 'Пользователь не найден';
      }
    }
  }

  getControl(name: string): AbstractControl {
    return this.loginForm.get(name) as AbstractControl;
  }
}
