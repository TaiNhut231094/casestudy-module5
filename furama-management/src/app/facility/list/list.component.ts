import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilities: Facility[] = [];
  idDelete: number;
  nameDelete: string;
  nameSearch = '';

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll(this.nameSearch).subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  openDelete(item: Facility) {
    this.idDelete = item.id;
    this.nameDelete = item.name;
  }

  deleteFacility() {
    this.facilityService.deleteFacility(this.idDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

  getValueSearch() {
    this.facilityService.getAll(this.nameSearch).subscribe(facilities => {
      this.facilities = facilities;
    });
  }
}
