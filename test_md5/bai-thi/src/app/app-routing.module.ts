import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XeListComponent} from "./xe/xe-list/xe-list.component";
import {XeEditComponent} from "./xe/xe-edit/xe-edit.component";

const routes: Routes = [

  {path: 'xe/list', component: XeListComponent},
  {path: 'xe/edit/:id', component: XeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
   ]
})
export class AppRoutingModule { }
