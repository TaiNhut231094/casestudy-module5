import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = [{
    id: 1,
    name: 'Nguyễn Thị Hào',
    dateOfBirthday: '1970-11-07',
    gender: true,
    idCard: '643431213',
    phoneNumber: '0945423362',
    email: 'thihao07@gmail.com',
    customerType: {id: 1, name: 'Member'},
    address: '23 Nguyễn Hoàng, Đà Nẵng'
  }, {
    id: 2,
    name: 'Phạm Xuân Diệu',
    dateOfBirthday: '1992-08-08',
    gender: true,
    idCard: '865342123',
    phoneNumber: '0954333333',
    email: 'xuandieu92@gmail.com',
    customerType: {id: 3, name: 'Gold'},
    address: 'K77/22 Thái Phiên, Quảng Trị'
  }, {
    id: 3,
    name: 'Trương Đình Nghệ',
    dateOfBirthday: '1990-02-27',
    gender: false,
    idCard: '488645199',
    phoneNumber: '0373213122',
    email: 'nghenhan2702@gmail.com',
    customerType: {id: 1, name: 'Diamond'},
    address: 'K323/12 Ông Ích Khiêm, Vinh'
  }, {
    id: 4,
    name: 'Dương Văn Quan',
    dateOfBirthday: '1981-07-08',
    gender: false,
    idCard: '543432111',
    phoneNumber: '0490039241',
    email: 'duongquan@gmail.com',
    customerType: {id: 1, name: 'Diamond'},
    address: 'K453/12 Lê Lợi, Đà Nẵng'
  }, {
    id: 5,
    name: 'Hoàng Trần Nhi Nhi',
    dateOfBirthday: '1995-12-09',
    gender: true,
    idCard: '795453345',
    phoneNumber: '0312345678',
    email: 'nhinhi123@gmail.com',
    customerType: {id: 4, name: 'Silver'},
    address: '224 Lý Thái Tổ, Gia Lai'
  }
  ];

  customerTypes: CustomerType[] = [{id: 1, name: 'Diamond'}, {id: 2, name: 'Platinium'}, {id: 3, name: 'Gold'}, {
    id: 4,
    name: 'Silver'
  }, {id: 5, name: 'Member'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
