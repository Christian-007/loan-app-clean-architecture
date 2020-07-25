import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '../base/use-case';
import { ProvinceModel } from '../domain/region.model';
import { RegionRepository } from '../repositories/region.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllProvincesUsecase implements UseCase<void, ProvinceModel> {
  constructor(private regionRepository: RegionRepository) {}

  execute(params: void): Observable<ProvinceModel> {
    return this.regionRepository.getAllProvinces();
  }
}
