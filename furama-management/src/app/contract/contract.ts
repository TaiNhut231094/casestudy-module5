import {CustomerType} from '../customer/customer-type';
import {Facility} from '../facility/facility';

export interface Contract {
  id: number;
  deposit: number;
  start: string;
  endDate: string;
  customerType: CustomerType;
  facility: Facility;
}
