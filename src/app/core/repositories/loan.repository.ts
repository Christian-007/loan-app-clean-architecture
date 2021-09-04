import { Observable } from 'rxjs';
import { LoanEntity } from '../entities/loan.entity';

export abstract class LoanRepository {
  abstract submitLoan(formData: LoanEntity): Observable<object>;
}
