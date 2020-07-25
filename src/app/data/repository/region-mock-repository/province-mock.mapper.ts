import { Mapper } from 'src/app/core/base/mapper';
import { RegionModel } from 'src/app/core/domain/region.model';
import { ProvinceMockEntity } from './region-mock.entity';

export class ProvinceMockMapper extends Mapper<
  ProvinceMockEntity,
  RegionModel
> {
  mapFrom(param: ProvinceMockEntity): RegionModel {
    return {
      id: param.province_id,
      name: param.province,
    };
  }

  mapTo(param: RegionModel): ProvinceMockEntity {
    return {
      province_id: param.id,
      province: param.name,
    };
  }
}
