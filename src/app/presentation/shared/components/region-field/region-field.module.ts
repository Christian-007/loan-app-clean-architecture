import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RegionFieldComponent } from './region-field.component';

@NgModule({
  declarations: [RegionFieldComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [RegionFieldComponent],
})
export class RegionFieldModule {}
