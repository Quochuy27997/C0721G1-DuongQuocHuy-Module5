import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer-service.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
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
  typeList: CustomerType[];
  // customerList: Customer[]=[];

  constructor(private customerService: CustomerService,
              private typeService: CustomerTypeService
  ) {
  }


  ngOnInit(): void {

    this.typeList = this.typeService.getAll();
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }

}
