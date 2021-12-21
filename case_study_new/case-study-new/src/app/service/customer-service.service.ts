import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../model/service";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[];
  private apiUrl = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }

  createCustomer(customerObj: Customer): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl, customerObj
    );
  }

  updateCustomer(customerObj: Customer): Observable<void> {
    return this.httpClient.patch<void>(
      this.apiUrl + '/' + customerObj.id, customerObj
    );
  }

  findById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiUrl + '/' + customerId);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + customerId);
  }

  search(customerSearch: Customer): Observable<Customer[]> {
    if (customerSearch.type.type === undefined) {
      return this.httpClient.get<Customer[]>(this.apiUrl + '?' +
        '&name_like=' + customerSearch.name);
    }
    return this.httpClient.get<Customer[]>(this.apiUrl + '?' +
      '&name_like=' + customerSearch.name +
      '&type.type_like=' + customerSearch.type.type
    );
  }
}
