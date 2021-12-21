import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer-service.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('KH-\\d{4}')]),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9,12}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84|090|091\\d{9,10}$')]),
    email: new FormControl('', [Validators.required,
      Validators.pattern('[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)')]),
    address: new FormControl('', Validators.required),
  });
  typeList: CustomerType[];


  constructor(private customerService: CustomerService,
              private typeService: CustomerTypeService,
              private router: Router
  ) {
  }


  ngOnInit(): void {

    this.typeService.getAll().subscribe(value => {
      this.typeList = value;
    });
  }

  submit() {
    const customer = this.customerForm.value;

    this.customerService.createCustomer(customer).subscribe();
    // this.customerService.createCustomer(customer);
    this.customerForm.reset();
    alert("thêm mới thành công");
    this.router.navigateByUrl("customer/list");
  }

}
