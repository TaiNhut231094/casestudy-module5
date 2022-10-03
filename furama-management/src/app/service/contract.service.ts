import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getAll(nameSearch: string): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts?customer.name_like=' + nameSearch);
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  getAllFacility(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${API_URL}/contracts/${id}`);
  }
}
