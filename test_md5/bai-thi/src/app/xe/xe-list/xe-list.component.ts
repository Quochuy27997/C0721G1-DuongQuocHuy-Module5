import {Component, OnInit} from '@angular/core';
import {Diadiem} from "../../model/diadiem";
import {Xe} from "../../model/xe";
import {XeService} from "../../service/xe.service";
import {DiaDiemService} from "../../service/dia-diem.service";
import {Router} from "@angular/router";
import {Diadiemden} from "../../model/diadiemden";
import {DiaDiemDenService} from "../../service/dia-diem-den.service";

@Component({
  selector: 'app-xe-list',
  templateUrl: './xe-list.component.html',
  styleUrls: ['./xe-list.component.css']
})
export class XeListComponent implements OnInit {
  xeList: Xe[] = [];
  p = 1;
  idDelete: number;


  diaDiemList: Diadiem[];
  diaDiemDenList: Diadiemden[];
  constructor(private xeService: XeService,
              private diaDiemService: DiaDiemService,
              private diaDiemDenService: DiaDiemDenService,
              private router: Router
  ) {
  }

  ngOnInit(): void {

    this.xeService.getAll().subscribe(value => {
      this.xeList = value;
    });
    this.diaDiemService.getAll().subscribe(value => {
      this.diaDiemList = value;
    });
    this.diaDiemDenService.getAll().subscribe(value => {
      this.diaDiemDenList = value;
    });

  }
 deleteXe() {
    this.xeService.deleteXe(this.idDelete).subscribe();
    this.ngOnInit();
  }

  returnList() {
    this.router.navigateByUrl("xe/list");
  }

  getIdTemplate(id: number) {
    this.idDelete = Number(id);
  }

}
