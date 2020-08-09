import { Component } from '@angular/core';

import { AuthModel } from 'src/app/core/domain/auth.model';
import { AuthenticateUsecase } from 'src/app/core/usecases/authenticate.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: AuthModel;
  step: number;

  constructor(private authenticateUsecase: AuthenticateUsecase) {
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
    this.authenticateUsecase.execute(this.loginForm);

    console.log('loginForm: ', this.loginForm);
  }
}
