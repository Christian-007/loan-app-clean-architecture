import { Observable } from 'rxjs';
import { ProvinceModel } from '../domain/region.model';

export abstract class RegionRepository {
  abstract getProvinceById(id: string): Observable<ProvinceModel>;
  abstract getAllProvinces(): Observable<ProvinceModel[]>;
}
