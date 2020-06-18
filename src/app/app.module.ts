import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestBedComponent } from './test-bed/test-bed.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EventTestComponent } from './EventTest/event-test.component';
import { ProductListComponent } from './ProductList/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBedComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
