import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {Facility} from '../../model/facility';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contracts: Contract[] = [];
  nameSearch = '';

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll(this.nameSearch).subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  getValueSearch() {
    this.contractService.getAll(this.nameSearch).subscribe(contracts => {
      this.contracts = contracts;
    });
  }
}
