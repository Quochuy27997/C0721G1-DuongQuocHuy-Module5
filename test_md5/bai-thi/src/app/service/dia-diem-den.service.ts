import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Diadiem} from "../model/diadiem";

@Injectable({
  providedIn: 'root'
})
export class DiaDiemDenService {
  private apiUrl = '  http://localhost:3000/diaDiemDenList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Diadiem[]> {
    return this.httpClient.get<Diadiem[]>(this.apiUrl);
  }
}
