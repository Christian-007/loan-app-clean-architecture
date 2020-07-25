import { Observable } from 'rxjs';
import { RegionModel } from '../domain/region.model';

export abstract class RegionRepository {
  abstract getProvinceById(id: string): Observable<RegionModel>;
  abstract getAllProvinces(): Observable<RegionModel[]>;
}
