import { Mapper } from 'src/app/core/base/mapper';
import { AuthModel } from 'src/app/core/domain/auth.model';
import { AuthMockEntity } from './auth-mock.entity';

export class AuthMockMapper extends Mapper<
  Partial<AuthMockEntity>,
  Partial<AuthModel>
> {
  mapFrom(param: Partial<AuthMockEntity>): Partial<AuthModel> {
    return {
      ...(param.phone && { phoneNumber: param.phone }),
      ...(param.identifier && { id: param.identifier }),
      ...(param.otp && { otp: param.otp }),
    };
  }

  mapTo(param: Partial<AuthModel>): Partial<AuthMockEntity> {
    return {
      ...(param.phoneNumber && { phone: param.phoneNumber }),
      ...(param.id && { identifier: param.id }),
      ...(param.otp && { otp: param.otp }),
    };
  }
}
