import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {ContractService} from '../../service/contract.service';
import {ToastrService} from 'ngx-toastr';
import {checkDate, checkDateStart, checkDateStop} from '../../util/customValidator.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  contractForm: FormGroup;
  facilities: Facility[] = [];
  customers: Customer[] = [];

  constructor(private contractService: ContractService) {
    this.contractForm = new FormGroup({
      deposit: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required, checkDateStart]),
      endDate: new FormControl('', [Validators.required, checkDateStop]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    }, checkDate);
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();
  }

  getAllCustomer() {
    this.contractService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

  getAllFacility() {
    this.contractService.getAllFacility().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  submit() {

  }
}
