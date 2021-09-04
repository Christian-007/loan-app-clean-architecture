import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, flatMap, find, delay } from 'rxjs/operators';

import { BaseRemoteResponse, NormalizedData } from '../base/response.model';
import { ProvinceMockDto, CityMockDto } from './region-mock.entity';
import { ProvinceMockMapper } from './province-mock.mapper';
import { CityMockMapper } from './city-mock.mapper';

import { Mapper } from '@core/base/mapper';
import { RegionEntity } from '@core/entities/region.entity';
import { RegionRepository } from '@core/repositories/region.repository';

@Injectable({
  providedIn: 'root',
})
export class RegionRepositoryMock extends RegionRepository {
  private provinceMapper: Mapper<ProvinceMockDto, RegionEntity>;
  private cityMapper: Mapper<CityMockDto, RegionEntity>;
  private allProvincesRes: BaseRemoteResponse<ProvinceMockDto[]>;
  private allCitiesByIdRes: BaseRemoteResponse<NormalizedData<CityMockDto[]>>;
  private mockLoadingTime: number;

  constructor() {
    super();
    this.provinceMapper = new ProvinceMockMapper();
    this.cityMapper = new CityMockMapper();
    this.mockLoadingTime = 2000;
    this.allProvincesRes = {
      message: 'OK',
      total: 34,
      result: [
        { province_id: '11', province: 'DKI JAKARTA' },
        { province_id: '17', province: 'BALI' },
      ],
    };
    this.allCitiesByIdRes = {
      message: 'OK',
      total: 6,
      result: {
        11: [
          { city_id: '152', city: 'KAB. ADM. KEP. SERIBU' },
          { city_id: '155', city: 'KOTA ADM. JAKARTA BARAT' },
          { city_id: '153', city: 'KOTA ADM. JAKARTA PUSAT' },
          { city_id: '156', city: 'KOTA ADM. JAKARTA SELATAN' },
          { city_id: '157', city: 'KOTA ADM. JAKARTA TIMUR' },
          { city_id: '154', city: 'KOTA ADM. JAKARTA UTARA' },
        ],
        17: [
          { city_id: '272', city: 'KAB. BADUNG' },
          { city_id: '275', city: 'KAB. BANGLI' },
          { city_id: '277', city: 'KAB. BULELENG' },
          { city_id: '273', city: 'KAB. GIANYAR' },
          { city_id: '270', city: 'KAB. JEMBRANA' },
          { city_id: '276', city: 'KAB. KARANGASEM' },
          { city_id: '274', city: 'KAB. KLUNGKUNG' },
          { city_id: '271', city: 'KAB. TABANAN' },
          { city_id: '278', city: 'KOTA DENPASAR' },
        ],
      },
    };
  }

  fetchOneProvinceById(id: string): Observable<RegionEntity> {
    return of(this.allProvincesRes).pipe(
      flatMap((res: BaseRemoteResponse<ProvinceMockDto[]>) => res.result),
      find((province: ProvinceMockDto) => province.province_id === id),
      map(this.provinceMapper.toEntity),
      delay(this.mockLoadingTime),
    );
  }

  fetchAllProvinces(): Observable<RegionEntity[]> {
    return of(this.allProvincesRes).pipe(
      map((res: BaseRemoteResponse<ProvinceMockDto[]>) => res.result),
      map((provinces: ProvinceMockDto[]) => {
        return provinces.map(this.provinceMapper.toEntity);
      }),
      delay(this.mockLoadingTime),
    );
  }

  fetchAllCitiesByProvinceId(id: string): Observable<RegionEntity[]> {
    return of(this.allCitiesByIdRes).pipe(
      map(
        (res: BaseRemoteResponse<NormalizedData<CityMockDto[]>>) =>
          res.result[id],
      ),
      map((cities: CityMockDto[]) => {
        return cities.map(this.cityMapper.toEntity);
      }),
      delay(this.mockLoadingTime),
    );
  }
}
