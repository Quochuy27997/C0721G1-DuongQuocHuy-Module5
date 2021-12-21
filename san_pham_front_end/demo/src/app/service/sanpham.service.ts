import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SanPham} from "../model/san-pham";
import {HangSX} from "../model/hang-sx";


let API = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SanPham[]> {
    return this.http.get<SanPham[]>(API + "/sanpham/list");
  }

  getHangSXList(): Observable<HangSX[]> {
    return this.http.get<HangSX[]>(API + "/hangsx/hangsxList");
  }

  createSanPham(sanPham: SanPham): Observable<void> {
    return this.http.post<void>(API + "/sanpham/create", sanPham);
  }

  updateSanPham(sanPham: SanPham): Observable<void> {
    return this.http.patch<void>(API + "/sanpham/update/", sanPham);
  }

  findById(id: number): Observable<SanPham> {
    return this.http.post<SanPham>(API + "/sanpham/findById", id);
  }

  delete(id: number): Observable<void> {
    return this.http.post<void>(API + "/sanpham/delete", id);
  }
}
