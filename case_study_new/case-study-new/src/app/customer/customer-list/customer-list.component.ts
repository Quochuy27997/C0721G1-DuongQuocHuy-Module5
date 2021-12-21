import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  serchFormCustomer: FormGroup = new FormGroup({

    type: new FormControl(''),
    name: new FormControl(''),
  });
  typeList: CustomerType[];
  customerSearch: Customer;
  p = 1;
  idDelete: number;

  constructor(private customerService: CustomerService,
              private typeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
    this.typeService.getAll().subscribe(value => {
      this.typeList = value;
    });


  }

  searchCustomer() {
    this.customerSearch = this.serchFormCustomer.value;
    this.customerService.search(this.customerSearch).subscribe(value => {
      this.customerList = value;
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe();
    this.ngOnInit();
  }

  returnList() {
    this.router.navigateByUrl("customer/list");
  }

  getIdTemplate(id: number) {
    this.idDelete = Number(id);
  }
}
