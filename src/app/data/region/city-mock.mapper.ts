import { Mapper } from 'src/app/core/base/mapper';
import { RegionEntity } from 'src/app/core/entities/region.entity';
import { CityMockEntity } from './region-mock.entity';

export class CityMockMapper extends Mapper<CityMockEntity, RegionEntity> {
  mapFrom(param: CityMockEntity): RegionEntity {
    return {
      id: param.city_id,
      name: param.city,
    };
  }
  mapTo(param: RegionEntity): CityMockEntity {
    return {
      city_id: param.id,
      city: param.name,
    };
  }
}
