import {CustomerType} from './customer-type';
import {Facility} from './facility';

export interface Contract {
  id: number;
  deposit: number;
  start: string;
  endDate: string;
  customerType: CustomerType;
  facility: Facility;
}
