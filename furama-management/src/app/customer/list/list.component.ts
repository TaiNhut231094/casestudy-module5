import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ToastrService} from 'ngx-toastr';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = [];
  idDelete: number;
  nameDelete: string;
  nameSearch = '';
  emailSearch = '';

  constructor(private customerService: CustomerService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    console.log(this.customers);
    this.customerService.getAll(this.nameSearch, this.emailSearch).subscribe(customers => {
      this.customers = customers;
    });
  }

  openDelete(item: Customer) {
    this.idDelete = item.id;
    this.nameDelete = item.name;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', 'Thông báo');
    });
  }

  getValueSearch() {
    this.customerService.getAll(this.nameSearch, this.emailSearch).subscribe(customers => {
      this.customers = customers;
    });
  }
}
