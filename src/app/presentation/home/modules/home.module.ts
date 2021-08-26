import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RegionRepository } from 'src/app/core/repositories/region.repository';
import { RegionRepositoryMock } from 'src/app/data/region/region.repository-mock';
import { LoanRepository } from 'src/app/core/repositories/loan.repository';
import { LoanRepositoryMock } from 'src/app/data/loan/loan.repository-mock';

import { HomeComponent } from '../containers/home.component';
import { RegionFieldModule } from 'src/app/shared/components/region-field/region-field.module';
import { HomeVm } from '../view-models/home.vm';
import { HomeStore } from '../stores/home.store';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HomeRoutingModule,
    RegionFieldModule,
  ],
  providers: [
    HomeVm,
    HomeStore,
    { provide: RegionRepository, useClass: RegionRepositoryMock },
    { provide: LoanRepository, useClass: LoanRepositoryMock },
  ],
})
export class HomeModule {}
