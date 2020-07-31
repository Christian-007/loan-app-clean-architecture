import { Component } from '@angular/core';

import { AuthModel } from 'src/app/core/domain/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: AuthModel;
  step: number;

  constructor() {
    this.step = 1;
    this.loginForm = {
      phoneNumber: '',
      id: '',
      otp: '',
    };
  }

  onFirstStepNext(phoneNumber: string): void {
    this.step++;
    this.loginForm = { ...this.loginForm, phoneNumber };
  }

  onSecondStepNext(id: string): void {
    this.step++;
    this.loginForm = { ...this.loginForm, id };
  }

  onThirdStepNext(otp: string): void {
    this.loginForm = { ...this.loginForm, otp };

    console.log('loginForm: ', this.loginForm);
  }
}
