import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {Service} from "../model/service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 serviceList: Service[];
  private apiUrl = 'http://localhost:3000/serviceList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.apiUrl);
  }

  createService(serviceObj: Service): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl, serviceObj
    );
  }

  updateService(serviceObj: Service): Observable<void> {
    return this.httpClient.patch<void>(
      this.apiUrl + '/' + serviceObj.id, serviceObj
    );
  }

  findById(serviceId: number): Observable<Service> {
    return this.httpClient.get<Service>(this.apiUrl + '/' + serviceId);
  }

  deleteService(serviceId: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + serviceId);
  }
}
