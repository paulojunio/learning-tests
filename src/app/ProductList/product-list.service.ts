import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    productList = PRODUCT_LIST;

    constructor() {}

    public getProductList() {
        return of(this.productList);
    }

    public filterProductList(searchString: string): Promise<any> {
        return of(
                    this.productList.filter(
                        product => product.title.toLowerCase().indexOf(searchString) > -1 )
                 ).toPromise();
    }
}

export const PRODUCT_LIST = [
    {
        "title": "Feijão",
        "price": 12.50
    },
    {
        "title": "Arroz",
        "price": 10.50
    },
    {
        "title": "Peixe",
        "price": 21.20
    },
    {
        "title": "Kinder Ovo",
        "price": 89.0
    },
    {
        "title": "Carne",
        "price": 11.11
    },
    {
        "title": "Batata",
        "price": 9.10
    }
]