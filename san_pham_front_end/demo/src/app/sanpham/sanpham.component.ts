import {Component, OnInit} from '@angular/core';
import {SanPham} from "../model/san-pham";
import {HangSX} from "../model/hang-sx";
import {FormControl, FormGroup} from "@angular/forms";
import {SanphamService} from "../service/sanpham.service";

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  sanPhamList: SanPham[] = [];
  hangSXList: HangSX[];

  sanPhamForm: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      hangSX: new FormControl(''),
    }
  );

  constructor(private sanPhamService: SanphamService) {
  }

  ngOnInit(): void {
    this.sanPhamService.getAll().subscribe(value => {
      this.sanPhamList = value;
    })
    this.sanPhamService.getHangSXList().subscribe(value => {
      this.hangSXList = value;
    })
  }

}
