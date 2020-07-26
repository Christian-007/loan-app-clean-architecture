export interface MockSuccessResponse {
  message: string;
  result: LoanProfileMockEntity;
}

export interface LoanProfileMockEntity {
  id: string;
  reason: string;
  status: string;
}

export interface LoanMockEntity {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  age: string;
  contactAddress: AddressMockEntity;
}

export interface AddressMockEntity {
  street: string;
  province: string;
  city: string;
}
