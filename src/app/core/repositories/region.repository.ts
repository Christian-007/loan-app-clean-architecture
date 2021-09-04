import { Observable } from 'rxjs';

export abstract class RegionRepository {
  abstract fetchOneProvinceById(id: string): Observable<object>;
  abstract fetchAllProvinces(): Observable<object[]>;
  abstract fetchAllCitiesByProvinceId(id: string): Observable<object[]>;
}
