import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


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


  // saveCustomer(customer) {
  //   this.customerList.push(customer);
  // }
  //
  // findById(id: number) {
  //   return this.customerList.find(category => category.id === id);
  // }

  // updateCustomer(id: number, customer: Customer) {
  //   for (let i = 0; i < this.customerList.length; i++) {
  //     if (this.customerList[i].id === customer.id) {
  //       this.customerList[i] = customer;
  //     }
  //   }
  //
  // }
  // deleteCustomer(id: number) {
  //   this.customerList.splice(this.customerList.findIndex(cus=>cus.id===id),1);
  // }
}
