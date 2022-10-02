import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RentType} from '../model/rent-type';
import {Facility} from '../model/facility';
import {FacilityType} from '../model/facility-type';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getAll(nameSearch: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities?name_like=' + nameSearch);
  }

  getAllRentType(): Observable<RentType[]> {
    return this.http.get<RentType[]>(API_URL + '/rentTypes');
  }

  getAllFacilityType(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(API_URL + '/facilityTypes');
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  updateFacility(id: number, facility: Facility): Observable<Customer> {
    return this.http.put<Facility>(`${API_URL}/facilities/${id}`, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
}
