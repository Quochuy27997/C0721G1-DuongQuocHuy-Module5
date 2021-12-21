import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

    });
  }

  ngOnInit(): void {

  }


  // deleteCustomer() {
  //   this.customerService.deleteCustomer(this.id).subscribe();
  //   alert('Xoá thành công');
  //   this.router.navigateByUrl("customer/list");
  // }
  //
  // returnList() {
  //   this.router.navigateByUrl("customer/list");
  // }
}
