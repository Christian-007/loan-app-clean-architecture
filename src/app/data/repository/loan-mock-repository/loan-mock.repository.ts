import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LoanRepository } from 'src/app/core/repositories/loan.repository';
import { LoanModel } from 'src/app/core/domain/loan.model';
import { Mapper } from 'src/app/core/base/mapper';
import { LoanMockEntity, MockSuccessResponse } from './loan-mock.entity';
import { LoanMockMapper } from './loan-mock.mapper';

@Injectable({
  providedIn: 'root',
})
export class LoanMockRepository extends LoanRepository {
  private loanMapper: Mapper<LoanMockEntity, LoanModel>;
  private mockResponse: MockSuccessResponse;
  private allMockLoans: LoanMockEntity[];

  constructor() {
    super();
    this.loanMapper = new LoanMockMapper();
    this.mockResponse = {
      message: 'OK',
      result: {
        id: '1',
        reason: null,
        status: 'InProcess',
      },
    };
    this.allMockLoans = [
      {
        firstName: 'Mockname',
        lastName: '-',
        id: '1',
        email: 'mock@mockmail.com',
        age: '22',
        contactAddress: {
          street: 'Mock street no. 1',
          province: 'DKI JAKARTA',
          city: 'JAKARTA BARAT',
        },
      },
    ];
  }

  submitLoan(formData: LoanModel): Observable<MockSuccessResponse> {
    const mappedFormData = this.loanMapper.mapTo(formData);
    this.allMockLoans.push(mappedFormData);

    return of(this.mockResponse).pipe(delay(2000));
  }
}
