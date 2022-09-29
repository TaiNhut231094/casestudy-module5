import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contracts: Contract[] = [{
    id: 1,
    deposit: 0,
    start: '2020-12-08',
    endDate: '2020-12-08',
    customerType: {id: 1, name: 'Diamond'},
    facility: {id: 3, name: 'Room Twin 01'}
  }, {
    id: 2,
    deposit: 200000,
    start: '2020-07-14',
    endDate: '2020-07-21',
    customerType: {id: 3, name: 'Gold'},
    facility: {id: 1, name: 'Beach Front'}
  }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
