export interface MockSuccessResponse {
  message: string;
  result: LoanProfileMockDto;
}

export interface LoanProfileMockDto {
  id: string;
  reason: string;
  status: string;
}

export interface LoanMockDto {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  age: string;
  contactAddress: AddressMockDto;
}

export interface AddressMockDto {
  street: string;
  province: string;
  city: string;
}
