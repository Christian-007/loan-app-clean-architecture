import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { BaseRemoteResponse } from '../base/response.model';
import { LoanMockDto, LoanProfileMockDto } from './loan-mock.dto';
import { LoanMockMapper } from './loan-mock.mapper';

import { LoanRepository } from 'src/app/core/repositories/loan.repository';
import { LoanEntity } from 'src/app/core/entities/loan.entity';
import { Mapper } from 'src/app/core/base/mapper';

@Injectable({
  providedIn: 'root',
})
export class LoanRepositoryMock extends LoanRepository {
  private loanMapper: Mapper<LoanMockDto, LoanEntity>;
  private mockResponse: BaseRemoteResponse<LoanProfileMockDto>;
  private allMockLoans: LoanMockDto[];

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

  submitLoan(
    formData: LoanEntity,
  ): Observable<BaseRemoteResponse<LoanProfileMockDto>> {
    const mappedFormData = this.loanMapper.toDto(formData);
    this.allMockLoans.push(mappedFormData);

    return of(this.mockResponse).pipe(delay(2000));
  }
}
