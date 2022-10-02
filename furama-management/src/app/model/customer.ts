import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  customerType?: CustomerType;
  address?: string;
}
