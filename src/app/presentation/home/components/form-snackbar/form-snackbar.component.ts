import { Component } from '@angular/core';

@Component({
  selector: 'app-form-snackbar',
  template: `
    <span class="FormSnackbar">
      Please complete the forms or fix invalid fields.
    </span>
  `,
  styles: [
    `
      .FormSnackbar {
        color: hotpink;
      }
    `,
  ],
})
export class FormSnackbarComponent {}
