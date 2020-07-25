import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      fullName: [''],
      id: [''],
      email: [''],
      age: [''],
    });
  }

  onSubmit(): void {
    console.log('values: ', this.loanForm.value);
  }
}
