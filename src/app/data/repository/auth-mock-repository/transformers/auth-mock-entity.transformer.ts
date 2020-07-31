import { Expose } from 'class-transformer';
import { AuthMockEntity } from '../auth-mock.entity';

export class AuthMockEntityTransformer implements AuthMockEntity {
  @Expose({ name: 'id' })
  identifier: string;

  @Expose({ name: 'phoneNumber' })
  phone: string;

  otp: string;
}
