import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from '../containers/home.component';
import { HomeViewModel } from '../view-models/home.view-model';
import { HomeStore } from '../stores/home.store';
import { HomeRoutingModule } from './home-routing.module';

import { RegionRepository } from '@core/repositories/region.repository';
import { LoanRepository } from '@core/repositories/loan.repository';
import { RegionRepositoryMock } from '@data/region/region.repository-mock';
import { LoanRepositoryMock } from '@data/loan/loan.repository-mock';
import { RegionFieldModule } from '@shared/components/region-field/region-field.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HomeRoutingModule,
    RegionFieldModule,
  ],
  providers: [
    HomeViewModel,
    HomeStore,
    { provide: RegionRepository, useClass: RegionRepositoryMock },
    { provide: LoanRepository, useClass: LoanRepositoryMock },
  ],
})
export class HomeModule {}
