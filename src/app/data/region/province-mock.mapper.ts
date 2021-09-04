import { Mapper } from 'src/app/core/base/mapper';
import { RegionEntity } from 'src/app/core/entities/region.entity';
import { ProvinceMockDto } from './region-mock.entity';

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
