import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestBedComponent } from './test-bed/test-bed.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EventTestComponent } from './EventTest/event-test.component';
import { ProductListComponent } from './ProductList/product-list.component';
import { LoginComponent } from './login/login.component';
import { SquarePipe } from './testPipes/square.pipe';
import { ParameterPipePipe } from './testPipes/parameter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestBedComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductListComponent,
    LoginComponent,
    SquarePipe,
    ParameterPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
