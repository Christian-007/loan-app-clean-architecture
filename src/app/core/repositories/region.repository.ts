import { Observable } from 'rxjs';
import { RegionEntity } from '../entities/region.entity';

export abstract class RegionRepository {
  abstract getProvinceById(id: string): Observable<RegionEntity>;
  abstract getAllProvinces(): Observable<RegionEntity[]>;
  abstract getAllCitiesByProvinceId(id: string): Observable<RegionEntity[]>;
}
