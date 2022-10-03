import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  facilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  facilityId: string;

  constructor(private facilityService: FacilityService) {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^([A-Z0-9])[a-z0-9]+((\\\\s[A-Z0-9])[a-z0-9]+)+$')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      standardRoom: new FormControl(''),
      descriptionOtherConvenience: new FormControl(''),
      poolArea: new FormControl('', [Validators.min(1), Validators.pattern('^\\d+$')]),
      numberOfFloors: new FormControl('', [Validators.min(1), Validators.pattern('^\\d+$')]),
      facilityFree: new FormControl(''),
      rentType: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.facilityForm.reset();
    });
  }

  getAllRentType() {
    this.facilityService.getAllRentType().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
  }

  getAllFacilityType() {
    this.facilityService.getAllFacilityType().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
  }

  facilityTypeChanged(value) {
    console.log(value);
    this.facilityId = value;
  }
}
