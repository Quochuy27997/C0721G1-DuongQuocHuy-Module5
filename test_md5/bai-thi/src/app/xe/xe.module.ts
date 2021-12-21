import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {XeRoutingModule} from './xe-routing.module';
import {XeListComponent} from './xe-list/xe-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { XeEditComponent } from './xe-edit/xe-edit.component';

@NgModule({
  declarations: [XeListComponent, XeEditComponent],
  imports: [
    CommonModule,
    XeRoutingModule,

    ReactiveFormsModule
  ]
})
export class XeModule {
}
