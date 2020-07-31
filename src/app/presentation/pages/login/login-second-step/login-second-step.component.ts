import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-second-step',
  templateUrl: './login-second-step.component.html',
})
export class LoginSecondStepComponent {
  loginForm: FormGroup;
  @Output() clickNext: EventEmitter<string>;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      id: [''],
    });
    this.clickNext = new EventEmitter();
  }

  onNext(): void {
    const { id } = this.loginForm.value;
    this.clickNext.emit(id);
  }
}
