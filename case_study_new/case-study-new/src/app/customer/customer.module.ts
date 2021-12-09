import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {ReactiveFormsModule} from "@angular/forms";

import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class CustomerModule { }
