import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockSuccessResponse } from 'src/app/data/repository/loan-mock-repository/loan-mock.entity';
import { UseCase } from '../base/use-case';
import { LoanModel } from '../domain/loan.model';
import { LoanRepository } from '../repositories/loan.repository';

@Injectable({
  providedIn: 'root',
})
export class SubmitLoanUsecase
  implements UseCase<LoanModel, MockSuccessResponse> {
  constructor(private loanRepository: LoanRepository) {}

  execute(params: LoanModel): Observable<MockSuccessResponse> {
    return this.loanRepository.submitLoan(params);
  }
}
