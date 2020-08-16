import { Observable } from 'rxjs';

import { AuthMockResponse } from 'src/app/data/repository/auth-mock-repository/auth-mock.entity';
import { AuthModel } from '../domain/auth.model';

export abstract class AuthRepository {
  abstract authenticate(
    loginData: Partial<AuthModel>,
  ): Observable<AuthMockResponse<any>>;
}
