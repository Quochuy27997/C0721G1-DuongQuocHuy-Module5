import { Injectable } from '@angular/core';
import {Position} from "../model/position";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private apiUrl = '  http://localhost:3000/positionList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.apiUrl);
  }
}
