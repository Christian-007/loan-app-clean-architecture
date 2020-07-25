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

export interface ProvinceMockEntity {
  province_id: string;
  province: string;
}
