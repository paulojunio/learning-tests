import { ProductService } from './product-list.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { DebugElement } from '@angular/core';
import { exception } from 'console';
import { By } from '@angular/platform-browser';

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.get(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create product service', () => {
    expect(productService).toBeTruthy();
  });

  it('should test filter product list (done)', (done) => {
    component.searchText = 'eggs';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter product list (async)', async(() => {
    component.searchText = 'eggs';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);

    });

  }));

  it('should test filter product list (fakeAsync)', fakeAsync(() => {
    component.searchText = 'eggs';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList({});

    tick();

    fixture.detectChanges();
    const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);

  }));

  fit('Testing fakeAsync, how to used tick()', fakeAsync(() => {
    let number = 10;
    setTimeout(() => number = 20, 100);
    expect(number).toEqual(10);
    tick(50);
    expect(number).toEqual(10);
    tick(50);
    expect(number).toEqual(20);
  }));
});
