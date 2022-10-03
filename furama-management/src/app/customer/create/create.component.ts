import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {validatorAge} from '../../util/customValidator.validator';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private toastrService: ToastrService) {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern
      ('^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})' +
        '([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\\s{1}' +
        '([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})' +
        '[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$')]),
      dateOfBirth: new FormControl('', [Validators.required, validatorAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9}|\\d{11}')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^09[0|1][0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  submit() {
    const customer = this.customerForm.value;
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.customerForm.reset();
        this.toastrService.success('Thêm mới thành công', 'Thông báo');
      });
    }
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}
