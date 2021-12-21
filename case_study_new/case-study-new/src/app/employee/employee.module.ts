import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [EmployeeListComponent, EmployeeCreateComponent, EmployeeEditComponent, EmployeeDeleteComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule { }
