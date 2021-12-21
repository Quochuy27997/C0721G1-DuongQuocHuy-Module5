import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanphamRoutingModule } from './sanpham-routing.module';
import { SanphamComponent } from './sanpham.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SanphamComponent],
  imports: [
    CommonModule,
    SanphamRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SanphamModule { }
