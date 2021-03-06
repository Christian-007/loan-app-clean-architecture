import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginSecondStepComponent } from './login-second-step.component';
import { LoadingButtonModule } from 'src/app/presentation/shared/components/loading-button/loading-button.module';

import { AuthenticateUsecase } from 'src/app/core/usecases/authenticate.usecase';

@NgModule({
  declarations: [LoginSecondStepComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LoadingButtonModule,
  ],
  providers: [AuthenticateUsecase],
  exports: [LoginSecondStepComponent],
})
export class LoginSecondStepModule {}
