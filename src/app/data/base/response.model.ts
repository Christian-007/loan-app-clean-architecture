export interface BaseRemoteResponse<T = void> {
  message: string;
  result?: T;
  total?: number;
}

export interface NormalizedData<T> {
  [key: string | number]: T;
}
