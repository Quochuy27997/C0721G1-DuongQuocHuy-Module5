import {Injectable} from '@angular/core';
import {Division} from "../model/division";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  private apiUrl = 'http://localhost:3000/divisionList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Division[]> {
    return this.httpClient.get<Division[]>(this.apiUrl);
  }


}
