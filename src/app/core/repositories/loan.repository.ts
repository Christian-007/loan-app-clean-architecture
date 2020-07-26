import { Observable } from 'rxjs';

import { LoanModel } from '../domain/loan.model';
import { MockSuccessResponse } from 'src/app/data/repository/loan-mock-repository/loan-mock.entity';

export abstract class LoanRepository {
  abstract submitLoan(formData: LoanModel): Observable<MockSuccessResponse>;
}
