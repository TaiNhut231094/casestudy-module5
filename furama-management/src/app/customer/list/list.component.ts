import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ToastrService} from 'ngx-toastr';

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

  constructor(private customerService: CustomerService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll(this.nameSearch).subscribe(customers => {
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
    this.customerService.getAll(this.nameSearch).subscribe(customers => {
      this.customers = customers;
    });
  }
}
