import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RentType} from "../../model/rent-type";
import {Service} from "../../model/service";
import {ServiceService} from "../../service/service.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RentTypeService} from "../../service/rent-type.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  serviceForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    area: new FormControl(''),
    numberFloor: new FormControl(''),
    maxPeople: new FormControl(''),
    cost: new FormControl(''),
    rentType: new FormControl(''),
    status: new FormControl(''),
  });
  rentTypeList: RentType[];
  id: number;
  service: Service;

  constructor(private serviceService: ServiceService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.rentTypeService.getAll().subscribe(value => {
      this.rentTypeList = value;
    });
    this.serviceService.findById(Number(this.id)).subscribe(value => {
      this.service = value;
      this.serviceForm.setValue(this.service);
    });
  }

  updateService() {
    const serviceUpdate = this.serviceForm.value;
    this.serviceService.updateService(serviceUpdate).subscribe();
    alert('Cập nhật thành công');
    this.router.navigateByUrl("service/list");
  }

  compareRentType(r1: RentType, r2: RentType): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }

}
