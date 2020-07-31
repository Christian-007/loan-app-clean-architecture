import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { AuthModel } from 'src/app/core/domain/auth.model';
import { Mapper } from 'src/app/core/base/mapper';
import { AuthMockResponse, AuthMockEntity } from './auth-mock.entity';
import { AuthMockMapper } from './auth-mock.mapper';

@Injectable({ providedIn: 'root' })
export class AuthMockRepository extends AuthRepository {
  private authMapper: Mapper<AuthMockEntity, AuthModel>;
  private fakeBodyRequest: AuthMockEntity;
  private mockAuthRes: AuthMockResponse<null>;

  constructor() {
    super();
    this.authMapper = new AuthMockMapper();
    this.fakeBodyRequest = null;
    this.mockAuthRes = {
      message: 'OK',
      result: null,
    };
  }

  authenticate(loginData: AuthModel): Observable<AuthMockResponse<any>> {
    const mappedLoginData = this.authMapper.mapTo(loginData);
    this.fakeBodyRequest = mappedLoginData;
    console.log('body request mapped: ', this.fakeBodyRequest);

    return of(this.mockAuthRes).pipe(delay(2000));
  }
}
