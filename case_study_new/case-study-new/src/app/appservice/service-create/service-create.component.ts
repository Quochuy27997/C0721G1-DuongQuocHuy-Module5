import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceService} from "../../service/service.service";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../../service/rent-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
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


  constructor(private serviceService: ServiceService,
              private rentType: RentTypeService,
              private router: Router
  ) {
  }


  ngOnInit(): void {

    this.rentType.getAll().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  submit() {
    const service = this.serviceForm.value;
    this.serviceService.createService(service).subscribe();
    this.serviceForm.reset();
    alert("thêm mới thành công");
    this.router.navigateByUrl("service/list");
  }

}
