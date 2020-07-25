import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, flatMap } from 'rxjs/operators';

import { Mapper } from 'src/app/core/base/mapper';
import { RegionRepository } from 'src/app/core/repositories/region.repository';
import { ProvinceModel } from 'src/app/core/domain/region.model';
import { ProvinceMockEntity, ProvinceResult } from './region-mock.entity';
import { RegionMockMapper } from './region-mock.mapper';

@Injectable({
  providedIn: 'root',
})
export class RegionMockRepository extends RegionRepository {
  private mapper: Mapper<ProvinceMockEntity, ProvinceModel>;
  private allProvincesRes: ProvinceResult;

  constructor() {
    super();
    this.mapper = new RegionMockMapper();
    this.allProvincesRes = {
      message: 'OK',
      total: 34,
      result: [
        { province_id: '1', province: 'ACEH' },
        { province_id: '17', province: 'BALI' },
        { province_id: '16', province: 'BANTEN' },
        { province_id: '7', province: 'BENGKULU' },
        { province_id: '14', province: 'DAISTA YOGYAKARTA' },
        { province_id: '11', province: 'DKI JAKARTA' },
        { province_id: '28', province: 'GORONTALO' },
        { province_id: '5', province: 'JAMBI' },
        { province_id: '12', province: 'JAWA BARAT' },
        { province_id: '13', province: 'JAWA TENGAH' },
        { province_id: '15', province: 'JAWA TIMUR' },
        { province_id: '20', province: 'KALIMANTAN BARAT' },
        { province_id: '22', province: 'KALIMANTAN SELATAN' },
        { province_id: '21', province: 'KALIMANTAN TENGAH' },
        { province_id: '23', province: 'KALIMANTAN TIMUR' },
        { province_id: '34', province: 'KALIMANTAN UTARA' },
        { province_id: '9', province: 'KEP. BANGKA BELITUNG' },
        { province_id: '10', province: 'KEPULAUAN RIAU' },
        { province_id: '8', province: 'LAMPUNG' },
        { province_id: '30', province: 'MALUKU' },
        { province_id: '31', province: 'MALUKU UTARA' },
        { province_id: '18', province: 'NUSA TENGGARA BARAT' },
        { province_id: '19', province: 'NUSA TENGGARA TIMUR' },
        { province_id: '32', province: 'PAPUA' },
        { province_id: '33', province: 'PAPUA BARAT' },
        { province_id: '4', province: 'RIAU' },
        { province_id: '29', province: 'SULAWESI BARAT' },
        { province_id: '26', province: 'SULAWESI SELATAN' },
        { province_id: '25', province: 'SULAWESI TENGAH' },
        { province_id: '27', province: 'SULAWESI TENGGARA' },
        { province_id: '24', province: 'SULAWESI UTARA' },
        { province_id: '3', province: 'SUMATERA BARAT' },
        { province_id: '6', province: 'SUMATERA SELATAN' },
        { province_id: '2', province: 'SUMATERA UTARA' },
      ],
    };
  }

  getProvinceById(id: string): Observable<ProvinceModel> {
    return of(this.allProvincesRes).pipe(
      flatMap((res: ProvinceResult) => res.result),
      filter((province: ProvinceMockEntity) => province.province_id === id),
      map(this.mapper.mapFrom),
    );
  }

  getAllProvinces(): Observable<ProvinceModel[]> {
    return of(this.allProvincesRes).pipe(
      map((res: ProvinceResult) => res.result),
      map((provinces: ProvinceMockEntity[]) => {
        return provinces.map(this.mapper.mapFrom);
      }),
    );
  }
}
