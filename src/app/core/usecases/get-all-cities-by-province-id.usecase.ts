import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '../base/use-case';
import { RegionModel } from '../domain/region.model';
import { RegionRepository } from '../repositories/region.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCitiesByProvinceIdUsecase
  implements UseCase<string, RegionModel[]> {
  constructor(private regionRepository: RegionRepository) {}

  execute(params: string): Observable<RegionModel[]> {
    return this.regionRepository.getAllCitiesByProvinceId(params);
  }
}
