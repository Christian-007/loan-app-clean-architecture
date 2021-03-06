import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '../base/use-case';
import { AuthModel } from '../domain/auth.model';
import { AuthRepository } from '../repositories/auth.repository';

import { AuthMockResponse } from 'src/app/data/repository/auth-mock-repository/auth-mock.entity';

@Injectable()
export class AuthenticateUsecase
  implements UseCase<Partial<AuthModel>, AuthMockResponse<any>> {
  constructor(private authRepository: AuthRepository) {}

  execute(params: Partial<AuthModel>): Observable<AuthMockResponse<any>> {
    return this.authRepository.authenticate(params);
  }
}
