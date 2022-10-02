import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityType} from '../../model/facility-type';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  facilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  facilityId: string;
  id: number;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router) {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
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
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.facilityService.findById(this.id).subscribe(facility => {
        this.facilityForm.patchValue(facility);
      });
    });
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
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

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  updateFacility(id: number) {
    const customer = this.facilityForm.value;
    this.facilityService.updateFacility(id, customer).subscribe(() => {
      this.router.navigateByUrl('facility/list');
      this.toastrService.success('Chỉnh sửa thành công', 'Thông báo');
    });
  }

  facilityTypeChanged(value) {
    console.log(value);
    this.facilityId = value;
  }
}
