import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";

import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {DivisionService} from "../../service/division.service";
import {EducationService} from "../../service/education.service";
import {Division} from "../../model/division";
import {Education} from "../../model/education";
import {Position} from "../../model/position";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
    position: new FormControl(''),
    education: new FormControl(''),
    division: new FormControl(''),
    birthday: new FormControl(''),
    idCard: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  divisionList: Division[];
  educationList: Education[];
  positionList: Position[];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private router: Router
  ) {
  }


  ngOnInit(): void {

    this.positionService.getAll().subscribe(value => {
      this.positionList = value;
    });
    this.divisionService.getAll().subscribe(value => {
      this.divisionList = value;
    });
    this.educationService.getAll().subscribe(value => {
      this.educationList = value;
    });

  }

  submit() {
    const employee = this.employeeForm.value;
    this.employeeService.createEmployee(employee).subscribe();
    this.employeeForm.reset();
    alert("thêm mới thành công");
    this.router.navigateByUrl("employee/list");
  }

}
