import { Expose } from 'class-transformer';
import { AuthModel } from 'src/app/core/domain/auth.model';

export class AuthModelTransformer implements AuthModel {
  @Expose({ name: 'identifier' })
  id: string;

  @Expose({ name: 'phone' })
  phoneNumber: string;

  otp: string;
}
