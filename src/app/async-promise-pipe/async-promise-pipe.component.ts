import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-async-promise-pipe',
  templateUrl: './async-promise-pipe.component.html',
  styleUrl: './async-promise-pipe.component.scss'
})
export class AsyncPromisePipeComponent implements OnInit {

  products$?: Promise<Product[]>;

  constructor(private productsService: ProductsService) { 

  }
  ngOnInit(): void {
    this.products$=new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productsService.getProducts());
      }, 3000);
    });
  }
}
