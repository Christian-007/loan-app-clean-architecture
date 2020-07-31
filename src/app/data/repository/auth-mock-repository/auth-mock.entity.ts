export interface AuthMockEntity {
  phone: string;
  identifier: string;
  otp: string;
}

export interface AuthMockResponse<T> {
  message: string;
  result: T;
}

export interface AuthMock400Res<T> {
  code: number;
  message: string;
}
