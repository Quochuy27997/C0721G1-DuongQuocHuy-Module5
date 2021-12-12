import { Injectable } from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private apiUrl = '  http://localhost:3000/types';
  constructor(private httpClient: HttpClient ) {
  }
  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.apiUrl);
  }
}
