import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-first-step',
  templateUrl: './login-first-step.component.html',
})
export class LoginFirstStepComponent {
  loginForm: FormGroup;
  @Output() clickNext: EventEmitter<string>;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      phoneNumber: [''],
    });
    this.clickNext = new EventEmitter();
  }

  onNext(): void {
    const { phoneNumber } = this.loginForm.value;
    this.clickNext.emit(phoneNumber);
  }
}
