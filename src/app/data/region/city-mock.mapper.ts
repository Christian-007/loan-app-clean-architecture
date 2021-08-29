import { Mapper } from 'src/app/core/base/mapper';
import { RegionEntity } from 'src/app/core/entities/region.entity';
import { CityMockDto } from './region-mock.entity';

export class CityMockMapper extends Mapper<CityMockDto, RegionEntity> {
  mapFrom(param: CityMockDto): RegionEntity {
    return {
      id: param.city_id,
      name: param.city,
    };
  }
  mapTo(param: RegionEntity): CityMockDto {
    return {
      city_id: param.id,
      city: param.name,
    };
  }
}
