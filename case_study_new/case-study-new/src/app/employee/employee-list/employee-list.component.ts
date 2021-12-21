import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Division} from "../../model/division";
import {Education} from "../../model/education";
import {Position} from "../../model/position";
import {DivisionService} from "../../service/division.service";
import {EducationService} from "../../service/education.service";
import {PositionService} from "../../service/position.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];
  p = 1;
  idDelete: number;

  serchFormEmployee: FormGroup = new FormGroup({

    name: new FormControl(''),
    position: new FormControl(''),
    education: new FormControl(''),
    division: new FormControl(''),
  });

  divisionList: Division[];
  educationList: Education[];
  positionList: Position[];
  employeeSearch: Employee;

  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private positionService: PositionService,
              private router: Router
  ) {
  }

  ngOnInit(): void {

    this.employeeService.getAll().subscribe(value => {
      this.employeeList = value;
    });
    this.divisionService.getAll().subscribe(value => {
      this.divisionList = value;
    });
    this.educationService.getAll().subscribe(value => {
      this.educationList = value;
    });
    this.positionService.getAll().subscribe(value => {
      this.positionList = value;
    });
  }

  search() {
    this.employeeSearch = this.serchFormEmployee.value;
    this.employeeService.search(this.employeeSearch).subscribe(value => {
      this.employeeList = value;
    });
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idDelete).subscribe();
    this.ngOnInit();
  }

  returnList() {
    this.router.navigateByUrl("employee/list");
  }

  getIdTemplate(id: number) {
    this.idDelete = Number(id);
  }
}
