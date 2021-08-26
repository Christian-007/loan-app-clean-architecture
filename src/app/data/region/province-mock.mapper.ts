import { Mapper } from 'src/app/core/base/mapper';
import { RegionEntity } from 'src/app/core/entities/region.entity';
import { ProvinceMockEntity } from './region-mock.entity';

export class ProvinceMockMapper extends Mapper<
  ProvinceMockEntity,
  RegionEntity
> {
  mapFrom(param: ProvinceMockEntity): RegionEntity {
    return {
      id: param.province_id,
      name: param.province,
    };
  }

  mapTo(param: RegionEntity): ProvinceMockEntity {
    return {
      province_id: param.id,
      province: param.name,
    };
  }
}
