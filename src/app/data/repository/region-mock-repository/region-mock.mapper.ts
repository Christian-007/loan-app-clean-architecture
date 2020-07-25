import { Mapper } from 'src/app/core/base/mapper';
import { ProvinceMockEntity } from './region-mock.entity';
import { ProvinceModel } from 'src/app/core/domain/region.model';

export class RegionMockMapper extends Mapper<
  ProvinceMockEntity,
  ProvinceModel
> {
  mapFrom(param: ProvinceMockEntity): ProvinceModel {
    return {
      id: param.province_id,
      name: param.province,
    };
  }

  mapTo(param: ProvinceModel): ProvinceMockEntity {
    return {
      province_id: param.id,
      province: param.name,
    };
  }
}
