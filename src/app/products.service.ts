import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
     new Product(1, 'Manzana', 100, 10),
     new Product(2, 'Pera', 200, 20),
     new Product(3, 'Banano', 100, 30),
     new Product(4, 'Zapallo', 50, 40),
     new Product(5, 'Naranja', 156, 50)
    ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
