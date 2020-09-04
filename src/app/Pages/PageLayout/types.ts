export interface UserState {
  username: string;
  user: UserInfo | null;
  error?: UserErrorType | null;
  loading: boolean;
}

export interface AddressInfo {
  city: string;
  geo: { lat: number; lng: number };
  street: string;
  suite: string;
  zipcode: string;
}

export interface CompanyInfo {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface UserInfo {
  email: string;
  id: string;
  name: string;
  phone: string;
  website: string;
  address: AddressInfo;
  company: CompanyInfo;
}

export enum UserErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
}

export type ContainerState = UserState;
