import {Injectable} from '@angular/core';
import {Employee} from "../model/employee";
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  customerList: Customer[];
  private apiUrl = 'http://localhost:3000/employeeList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  createEmployee(employeeObj: Employee): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl, employeeObj
    );
  }

  updateEmployee(employeeObj: Employee): Observable<void> {
    return this.httpClient.patch<void>(
      this.apiUrl + '/' + employeeObj.id, employeeObj
    );
  }

  findById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiUrl + '/' + employeeId);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + employeeId);
  }


  search(employeeSearch: Employee): Observable<Employee[]> {
    let API = this.apiUrl + '?'

      + '&name_like=' + employeeSearch.name;

    if (employeeSearch.position.name !== undefined) {
      API += '&position.id=' + employeeSearch.position.id;
    }
    if (employeeSearch.division.name !== undefined) {
      API += '&division.id=' + employeeSearch.division.id;
    }
    if (employeeSearch.education.name !== undefined) {
      API += '&education.id=' + employeeSearch.education.id;
    }
    return this.httpClient.get<Employee[]>(API);

  }
}
