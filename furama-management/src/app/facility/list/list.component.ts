import {Component, OnInit} from '@angular/core';
import {Facility} from '../facility';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilities: Facility[] = [{
    id: 1,
    name: 'Beach Front',
    area: 25000,
    cost: 10000000,
    maxPeople: 10,
    standardRoom: 'vip',
    descriptionOtherConvenience: 'Có hồ bơi',
    poolArea: 500,
    numberOfFloors: 4,
    facilityFree: null,
    rentType: {id: 4, name: 'year'},
    facilityType: {id: 1, name: 'Villa'},
    image: 'assets/images/three-bedroom-pool-villa-2-cr-800x450.jpg'
  }, {
    id: 2,
    name: 'House Princess 01',
    area: 14000,
    cost: 5000000,
    maxPeople: 7,
    standardRoom: 'vip',
    descriptionOtherConvenience: 'Có thêm bếp nướng',
    poolArea: null,
    numberOfFloors: 3,
    facilityFree: null,
    rentType: {id: 2, name: 'day'},
    facilityType: {id: 2, name: 'House'},
    image: 'assets/images/phong-ngu-biet-thu-4-pn-furama-da-nang.jpg'
  }, {
    id: 3,
    name: 'Room Twin 01',
    area: 5000,
    cost: 1000000,
    maxPeople: 2,
    standardRoom: 'normal',
    descriptionOtherConvenience: 'Có tivi',
    poolArea: null,
    numberOfFloors: null,
    facilityFree: 'Ăn sáng',
    rentType: {id: 3, name: 'month'},
    facilityType: {id: 3, name: 'Room'},
    image: 'assets/images/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg'
  }, {
    id: 4,
    name: 'Villa No Beach Front',
    area: 22000,
    cost: 9000000,
    maxPeople: 8,
    standardRoom: 'normal',
    descriptionOtherConvenience: 'Có hồ bơi',
    poolArea: 300,
    numberOfFloors: 3,
    facilityFree: null,
    rentType: {id: 1, name: 'hour'},
    facilityType: {id: 1, name: 'Villa'},
    image: 'assets/images/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
  }, {
    id: 5,
    name: 'House Princess 02',
    area: 10000,
    cost: 4000000,
    maxPeople: 5,
    standardRoom: 'normal',
    descriptionOtherConvenience: 'Có thêm bếp nướng',
    poolArea: null,
    numberOfFloors: 2,
    facilityFree: null,
    rentType: {id: 3, name: 'month'},
    facilityType: {id: 2, name: 'House'},
    image: 'assets/images/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
  }, {
    id: 6,
    name: 'Room Twin 02',
    area: 300,
    cost: 900000,
    maxPeople: 2,
    standardRoom: 'normal',
    descriptionOtherConvenience: 'Có tivi',
    poolArea: null,
    numberOfFloors: null,
    facilityFree: 'Ăn tối',
    rentType: {id: 2, name: 'day'},
    facilityType: {id: 3, name: 'Room'},
    image: 'assets/images/revato-17783-12857355-400310.jpg'
  }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
