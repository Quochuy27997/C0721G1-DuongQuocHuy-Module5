import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Diadiem} from "../../model/diadiem";
import {Xe} from "../../model/xe";
import {XeService} from "../../service/xe.service";
import {DiaDiemService} from "../../service/dia-diem.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Diadiemden} from "../../model/diadiemden";
import {DiaDiemDenService} from "../../service/dia-diem-den.service";

@Component({
  selector: 'app-xe-edit',
  templateUrl: './xe-edit.component.html',
  styleUrls: ['./xe-edit.component.css']
})
export class XeEditComponent implements OnInit {

  xeForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    bienSoXe: new FormControl('', Validators.required),
    loaiXe: new FormControl('', Validators.required),
    nhaXe: new FormControl('', Validators.required),
    diemDi: new FormControl('', Validators.required),
    diemDen: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\090|093|097\\d{9,10}$')]),

    email: new FormControl('', [Validators.required,
      Validators.pattern('[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9]*)')]),
    gioDi: new FormControl('', Validators.required),
    gioDen: new FormControl('', Validators.required),
  });
  id: number;
  diaDiemList: Diadiem[];
  diaDiemDenList: Diadiemden[];
  xe: Xe;

  constructor(private xeService: XeService,
              private diaDiemService: DiaDiemService,
              private diaDiemDenService: DiaDiemDenService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.diaDiemService.getAll().subscribe(value => {
      this.diaDiemList = value;
    });
    this.diaDiemDenService.getAll().subscribe(value => {
      this.diaDiemDenList = value;
    });
    this.xeService.findById(Number(this.id)).subscribe(value => {
      this.xe = value;
      this.xeForm.setValue(this.xe);
    });
  }


  updateXe() {
    const xeUpdate = this.xeForm.value;
    this.xeService.updateXe(xeUpdate).subscribe();
    alert('Cập nhật thành công');
    this.router.navigateByUrl("xe/list");
  }

  compareDiaDiemDi(di1: Diadiem, di2: Diadiem): boolean {
    return di1 && di2 ? di1.id === di2.id : di1 === di2;
  }

  compareDiaDiemDen(den1: Diadiemden, den2: Diadiemden): boolean {
    return den1 && den2 ? den1.id === den2.id : den1 === den2;
  }


  returntList() {
    this.router.navigateByUrl("xe/list");
  }
}
