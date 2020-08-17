import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthModel } from 'src/app/core/domain/auth.model';
import { AuthenticateUsecase } from 'src/app/core/usecases/authenticate.usecase';

@Component({
  selector: 'app-login-third-step',
  templateUrl: './login-third-step.component.html',
})
export class LoginThirdStepComponent {
  @Output() clickNext: EventEmitter<string>;

  loginForm: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authenticateUsecase: AuthenticateUsecase,
  ) {
    this.clickNext = new EventEmitter();
    this.loginForm = this.fb.group({
      otp: [''],
    });
    this.isLoading = false;
  }

  onNext(): void {
    const loginFormData = this.loginForm.value as Partial<AuthModel>;

    this.isLoading = true;
    this.authenticateUsecase.execute(loginFormData).subscribe(() => {
      this.isLoading = false;
      this.clickNext.emit();
    });
  }
}
