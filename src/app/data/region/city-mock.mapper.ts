import { CityMockDto } from './region-mock.entity';

import { Mapper } from '@core/base/mapper';
import { RegionEntity } from '@core/entities/region.entity';

export class CityMockMapper extends Mapper<CityMockDto, RegionEntity> {
  toEntity(param: CityMockDto): RegionEntity {
    return {
      id: param.city_id,
      name: param.city,
    };
  }
  toDto(param: RegionEntity): CityMockDto {
    return {
      city_id: param.id,
      city: param.name,
    };
  }
}
