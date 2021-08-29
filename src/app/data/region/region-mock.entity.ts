/**
 * This interface is the supposed response from Backend
 */
export interface BaseResponse {
  message: string;
  total: number;
}

export interface ProvinceResult extends BaseResponse {
  result: ProvinceMockDto[];
}

export interface CityResult extends BaseResponse {
  result: { [key: number]: CityMockDto[] };
}

export interface ProvinceMockDto {
  province_id: string;
  province: string;
}

export interface CityMockDto {
  city_id: string;
  city: string;
}
