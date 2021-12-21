import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {
  id: number;

  constructor(private serviceService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

    });
  }

  ngOnInit(): void {
  }
  //
  // deleteService() {
  //   this.serviceService.deleteService(this.id).subscribe();
  //   alert('Xoá thành công');
  //   this.router.navigateByUrl("service/list");
  // }
  //
  // returnList() {
  //   this.router.navigateByUrl("service/list");
  // }

}
