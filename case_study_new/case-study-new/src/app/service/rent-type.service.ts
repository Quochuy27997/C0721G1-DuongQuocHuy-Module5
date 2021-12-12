import {Injectable} from '@angular/core';
import {Position} from "../model/position";
import {RentType} from "../model/rent-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private apiUrl = '  http://localhost:3000/rentTypeList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.apiUrl);
  }
}
