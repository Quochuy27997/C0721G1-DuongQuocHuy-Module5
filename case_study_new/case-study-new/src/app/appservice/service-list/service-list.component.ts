import {Component, OnInit} from '@angular/core';
import {Service} from "../../model/service";
import {ServiceService} from "../../service/service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../../service/rent-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceList: Service[] = [];
  p = 1;
  serchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    rentType: new FormControl('')

  });
  rentTypeList: RentType[];
  serviceSearch: Service;
  idDelete: number;

  constructor(private serviceService: ServiceService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {


    this.serviceService.getAll().subscribe(value => {
      this.serviceList = value;
    });
    this.rentTypeService.getAll().subscribe(value => {
      this.rentTypeList = value;
    });

  }

  search() {
    this.serviceSearch = this.serchForm.value;
    this.serviceService.search(this.serviceSearch).subscribe(value => {
      this.serviceList = value;
    });
  }
  deleteService() {
    this.serviceService.deleteService(this.idDelete).subscribe();
    this.ngOnInit();
  }

  returnList() {
    this.router.navigateByUrl("service/list");
  }

  getIdTemplate(id: number) {
    this.idDelete = Number(id);
  }
}
