import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-third-step',
  templateUrl: './login-third-step.component.html',
})
export class LoginThirdStepComponent {
  loginForm: FormGroup;
  @Output() clickNext: EventEmitter<string>;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      otp: [''],
    });
    this.clickNext = new EventEmitter();
  }

  onNext(): void {
    const { otp } = this.loginForm.value;
    this.clickNext.emit(otp);
  }
}
