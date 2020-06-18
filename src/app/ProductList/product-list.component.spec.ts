import { ProductService } from './product-list.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { DebugElement } from '@angular/core';
import { exception } from 'console';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create product service', () => {
    expect(productService).toBeTruthy();
  });

  it('should test filter product list using (done)', (done) => {

    component.searchText = 'Batata';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList({});

    productSpy.calls.mostRecent().returnValue.then( () => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText); 
    });
    done();
  });

  it('should test filter product list using (async)', async(() => {
    
    const searchText = 'Batata';
    component.tempProductList = [ {title: 'teste', price: 23} ];
    fixture.detectChanges();

    component.searchText = searchText;
    let productSpy = spyOn(productService, 'filterProductList').withArgs('Batata').and.callThrough()

    component.filterProductList({});
    console.log('oiiiii')
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      console.log("vaiii", debugElement.query(By.css('#product_0')).nativeElement.innerText);
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      
      expect(value).toContain(component.searchText); 
    });
  }));
});
