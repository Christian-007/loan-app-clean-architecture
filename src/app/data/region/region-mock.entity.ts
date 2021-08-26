/**
 * This interface is the supposed response from Backend
 */
export interface BaseResponse {
  message: string;
  total: number;
}

export interface ProvinceResult extends BaseResponse {
  result: ProvinceMockEntity[];
}

export interface CityResult extends BaseResponse {
  result: { [key: number]: CityMockEntity[] };
}

export interface ProvinceMockEntity {
  province_id: string;
  province: string;
}

export interface CityMockEntity {
  city_id: string;
  city: string;
}
