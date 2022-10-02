import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {ToastrService} from 'ngx-toastr';
import {validatorAge} from '../../util/customValidator.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
    this.customerForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required, validatorAge]),
        gender: new FormControl('', [Validators.required]),
        idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}|\\d{11}')]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^09[0|1][0-9]{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        customerType: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
      }
    );
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerForm.patchValue(customer);
      });
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      this.router.navigateByUrl('customer/list');
      this.toastrService.success('Chỉnh sửa thành công', 'Thông báo');
    });
  }
}
