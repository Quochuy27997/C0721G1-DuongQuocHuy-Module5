import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {EducationService} from "../../service/education.service";
import {DivisionService} from "../../service/division.service";
import {Education} from "../../model/education";
import {Division} from "../../model/division";
import {Position} from "../../model/position";
import {CustomerType} from "../../model/customer-type";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

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
  id: number;
  positionList: Position[];
  educationList: Education[];
  divisionList: Division[];
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private educationService: EducationService,
              private divisionService: DivisionService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.positionService.getAll().subscribe(value => {
      this.positionList = value;
    });
    this.educationService.getAll().subscribe(value => {
      this.educationList = value;
    });
    this.divisionService.getAll().subscribe(value => {
      this.divisionList = value;
    });
    this.employeeService.findById(Number(this.id)).subscribe(value => {
      this.employee = value;
      this.employeeForm.setValue(this.employee);
    });
  }


  updateEmployee() {
    const employeeUpdate = this.employeeForm.value;
    this.employeeService.updateEmployee(employeeUpdate).subscribe();
    alert('Cập nhật thành công');
    this.router.navigateByUrl("employee/list");
  }

  comparePosition(p1: Position, p2: Position): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

  compareEducation(e1: Education, e2: Education): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  compareDivision(d1: Division, d2: Division): boolean {
    return d1 && d2 ? d1.id === d2.id : d1 === d2;
  }

}
