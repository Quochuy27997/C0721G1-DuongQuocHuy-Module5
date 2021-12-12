import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {ReactiveFormsModule} from "@angular/forms";

import {BrowserModule} from "@angular/platform-browser";
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent, CustomerDeleteComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class CustomerModule { }
