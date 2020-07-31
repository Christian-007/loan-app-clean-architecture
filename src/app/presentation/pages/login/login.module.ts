import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginFirstStepModule } from './login-first-step/login-first-step.module';
import { LoginSecondStepModule } from './login-second-step/login-second-step.module';
import { LoginThirdStepModule } from './login-third-step/login-third-step.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
    LoginFirstStepModule,
    LoginSecondStepModule,
    LoginThirdStepModule,
  ],
})
export class LoginModule {}
