import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {CustomerModule} from "./customer/customer.module";
import {EmployeeModule} from "./employee/employee.module";
import {ServiceModule} from "./service/service.module";
import {AppserviceModule} from "./appservice/appservice.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomerModule,
    EmployeeModule,
    ServiceModule,
    AppserviceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
