import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingButtonComponent } from './loading-button.component';

@NgModule({
  declarations: [LoadingButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [LoadingButtonComponent],
})
export class LoadingButtonModule {}
