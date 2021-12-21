import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppserviceRoutingModule } from './appservice-routing.module';
import { ServiceListComponent } from './service-list/service-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceDeleteComponent } from './service-delete/service-delete.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [ServiceListComponent, ServiceCreateComponent, ServiceEditComponent, ServiceDeleteComponent],
  imports: [
    CommonModule,
    AppserviceRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AppserviceModule { }
