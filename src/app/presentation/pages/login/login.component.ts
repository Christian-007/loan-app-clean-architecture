import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  step: number;

  constructor() {
    this.step = 1;
  }

  onFirstStepNext(): void {
    this.step++;
  }

  onSecondStepNext(): void {
    this.step++;
  }

  onThirdStepNext(): void {
    console.log('Authenticated!');
  }
}
