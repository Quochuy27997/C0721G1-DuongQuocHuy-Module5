import {Injectable} from '@angular/core';
import {Xe} from "../model/xe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class XeService {
  xeList: Xe[];
  private apiUrl = '  http://localhost:3000/xeList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Xe[]> {
    return this.httpClient.get<Xe[]>(this.apiUrl);
  }


  updateXe(xeObj: Xe): Observable<void> {
    return this.httpClient.patch<void>(
      this.apiUrl + '/' + xeObj.id, xeObj
    );
  }

  findById(xeId: number): Observable<Xe> {
    return this.httpClient.get<Xe>(this.apiUrl + '/' + xeId);
  }

  deleteXe(xeId: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + xeId);
  }
}
