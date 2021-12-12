import { Injectable } from '@angular/core';
import {Education} from "../model/education";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = ' http://localhost:3000/educationList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.apiUrl);
  }
}
