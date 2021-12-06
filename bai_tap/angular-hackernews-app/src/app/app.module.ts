import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VanKienComponent } from './van-kien/van-kien.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    VanKienComponent,
    ProductPageComponent,
    StockStatusComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
