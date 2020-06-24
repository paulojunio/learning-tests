import { ProductService } from './product-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchText: string;
  //productList: any[] = [];

  tempProductList: any[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data => {

      this.tempProductList = data;
    });

  }

  filterProductList(event) {
    let val = this.searchText;
    this.productService.filterProductList(val)
      .then((data) => {
        this.tempProductList = data;

      });
  }

  getFilterCount() {

  }
}
