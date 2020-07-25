import { Mapper } from 'src/app/core/base/mapper';
import { RegionModel } from 'src/app/core/domain/region.model';
import { CityMockEntity } from './region-mock.entity';

export class CityMockMapper extends Mapper<CityMockEntity, RegionModel> {
  mapFrom(param: CityMockEntity): RegionModel {
    return {
      id: param.city_id,
      name: param.city,
    };
  }
  mapTo(param: RegionModel): CityMockEntity {
    return {
      city_id: param.id,
      city: param.name,
    };
  }
}
