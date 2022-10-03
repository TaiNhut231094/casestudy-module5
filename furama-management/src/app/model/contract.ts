import {Facility} from './facility';
import {Customer} from './customer';

export interface Contract {
  id: number;
  deposit: number;
  startDate: string;
  endDate: string;
  customer: Customer;
  facility: Facility;
}
