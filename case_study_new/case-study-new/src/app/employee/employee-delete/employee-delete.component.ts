import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Education} from "../../model/education";
import {Division} from "../../model/division";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationService} from "../../service/education.service";
import {DivisionService} from "../../service/division.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Position} from "../../model/position";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  id: number;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.id).subscribe();
    alert('Xoá thành công');
    this.router.navigateByUrl("employee/list");
  }

  returnList() {
    this.router.navigateByUrl("employee/list")
  }
}
