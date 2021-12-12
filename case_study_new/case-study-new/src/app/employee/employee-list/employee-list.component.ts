import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {

    this.employeeService.getAll().subscribe(value => {
      this.employeeList = value;
    });
  }
}
