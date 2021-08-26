import { Observable } from 'rxjs';

import { LoanEntity } from '../entities/loan.entity';
import { MockSuccessResponse } from 'src/app/data/loan/loan-mock.dto';

export abstract class LoanRepository {
  abstract submitLoan(formData: LoanEntity): Observable<MockSuccessResponse>;
}
