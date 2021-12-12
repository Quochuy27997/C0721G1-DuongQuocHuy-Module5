import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerDeleteComponent} from "./customer/customer-delete/customer-delete.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee/employee-edit/employee-edit.component";
import {EmployeeDeleteComponent} from "./employee/employee-delete/employee-delete.component";
import {ServiceListComponent} from "./appservice/service-list/service-list.component";
import {ServiceCreateComponent} from "./appservice/service-create/service-create.component";
import {ServiceEditComponent} from "./appservice/service-edit/service-edit.component";
import {ServiceDeleteComponent} from "./appservice/service-delete/service-delete.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms'
const routes: Routes = [
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'customer/delete/:id', component: CustomerDeleteComponent},
  {path: 'employee/list', component: EmployeeListComponent},
  {path: 'employee/create', component: EmployeeCreateComponent},
  {path: 'employee/edit/:id', component: EmployeeEditComponent},
  {path: 'employee/delete/:id', component: EmployeeDeleteComponent},
  {path: 'service/list', component: ServiceListComponent},
  {path: 'service/create', component: ServiceCreateComponent},
  {path: 'service/edit/:id', component: ServiceEditComponent},
  {path: 'service/delete/:id', component: ServiceDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AppRoutingModule {
}
