import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthenticateUsecase } from 'src/app/core/usecases/authenticate.usecase';
import { AuthModel } from 'src/app/core/domain/auth.model';

@Component({
  selector: 'app-login-first-step',
  templateUrl: './login-first-step.component.html',
})
export class LoginFirstStepComponent {
  @Output() clickNext: EventEmitter<string>;

  loginForm: FormGroup;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authenticateUseCase: AuthenticateUsecase,
  ) {
    this.clickNext = new EventEmitter();
    this.loginForm = this.fb.group({
      phoneNumber: [''],
    });
    this.isLoading = false;
  }

  onNext(): void {
    const loginFormData = this.loginForm.value as Partial<AuthModel>;

    this.isLoading = true;
    this.authenticateUseCase.execute(loginFormData).subscribe(() => {
      this.isLoading = false;
      this.clickNext.emit();
    });
  }
}
