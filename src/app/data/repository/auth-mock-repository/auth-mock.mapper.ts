import { plainToClass } from 'class-transformer';

import { Mapper } from 'src/app/core/base/mapper';
import { AuthModel } from 'src/app/core/domain/auth.model';
import { AuthMockEntity } from './auth-mock.entity';
import { AuthModelTransformer } from './transformers/auth-model.trasnformer';
import { AuthMockEntityTransformer } from './transformers/auth-mock-entity.transformer';

export class AuthMockMapper extends Mapper<AuthMockEntity, AuthModel> {
  mapFrom(param: AuthMockEntity): AuthModel {
    return plainToClass(AuthModelTransformer, param);
  }
  mapTo(param: AuthModel): AuthMockEntity {
    return plainToClass(AuthMockEntityTransformer, param);
  }
}
