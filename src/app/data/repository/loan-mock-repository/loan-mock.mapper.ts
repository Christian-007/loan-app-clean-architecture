import { Mapper } from 'src/app/core/base/mapper';
import { LoanModel } from 'src/app/core/domain/loan.model';
import { LoanMockEntity } from './loan-mock.entity';

export class LoanMockMapper extends Mapper<LoanMockEntity, LoanModel> {
  mapFrom(param: LoanMockEntity): LoanModel {
    return {
      fullName: `${param.firstName} ${param.lastName}`,
      id: param.id,
      email: param.email,
      age: param.age,
      street: param.contactAddress.street,
      province: param.contactAddress.province,
      city: param.contactAddress.city,
    };
  }

  mapTo(param: LoanModel): LoanMockEntity {
    return {
      firstName: this.getFirstName(param.fullName),
      lastName: this.getLastName(param.fullName),
      id: param.id,
      email: param.email,
      age: param.age,
      contactAddress: {
        street: param.street,
        province: param.province,
        city: param.city,
      },
    };
  }

  private getFirstName(fullName: string): string {
    return fullName.split(' ').slice(0, -1).join(' ') || fullName;
  }

  private getLastName(fullName: string): string {
    const splittedFullName = fullName.split(' ');

    if (splittedFullName.length > 1) {
      return splittedFullName.slice(-1).join(' ');
    }

    return '-'; // default empty lastName value
  }
}
