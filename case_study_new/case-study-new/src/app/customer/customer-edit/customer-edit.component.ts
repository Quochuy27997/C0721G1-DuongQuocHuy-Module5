import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer-service.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    type: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    idCard: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  id: number;
  typeList: CustomerType[];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private typeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.typeService.getAll().subscribe(value => {
      this.typeList = value;
    });
    this.customerService.findById(Number(this.id)).subscribe(value => {
      this.customer = value;
      this.customerForm.setValue(this.customer);
    });

  }

  updateCustomer() {
    const customerUpdate = this.customerForm.value;
    this.customerService.updateCustomer(customerUpdate).subscribe();
    alert('Cập nhật thành công');
    this.router.navigateByUrl("customer/list");
  }


  compareCustomerType(c1: CustomerType, c2: CustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

