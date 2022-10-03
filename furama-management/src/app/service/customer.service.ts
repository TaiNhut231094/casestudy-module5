import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {CustomerType} from '../model/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(nameSearch: string, emailSearch: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers?name_like=' + nameSearch + '&email_like=' + emailSearch);
  }

  // getAllCustomer(nameSearch: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(API_URL + '/customerRest/list?name=' + nameSearch);
  // }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL + '/customerTypes');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
}
