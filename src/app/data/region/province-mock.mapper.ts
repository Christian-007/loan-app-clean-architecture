import { ProvinceMockDto } from './region-mock.entity';

import { Mapper } from '@core/base/mapper';
import { RegionEntity } from '@core/entities/region.entity';

export class ProvinceMockMapper extends Mapper<ProvinceMockDto, RegionEntity> {
  toEntity(param: ProvinceMockDto): RegionEntity {
    return {
      id: param.province_id,
      name: param.province,
    };
  }

  toDto(param: RegionEntity): ProvinceMockDto {
    return {
      province_id: param.id,
      province: param.name,
    };
  }
}
