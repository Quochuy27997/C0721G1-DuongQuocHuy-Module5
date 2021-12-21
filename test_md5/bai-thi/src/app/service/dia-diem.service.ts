import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Diadiem} from "../model/diadiem";

@Injectable({
  providedIn: 'root'
})
export class DiaDiemService {
  private apiUrl = '  http://localhost:3000/diaDiemList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Diadiem[]> {
    return this.httpClient.get<Diadiem[]>(this.apiUrl);
  }
}
