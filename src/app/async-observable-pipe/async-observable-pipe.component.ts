import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, filter, map } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrl: './async-observable-pipe.component.scss'
})
export class AsyncObservablePipeComponent implements OnInit {

  products$?:Observable<Product[]>;

  constructor(private productsService: ProductsService) { 
  }

  ngOnInit(): void {
    this.products$=new Observable<Product[]>((observer)=>{
      setTimeout(() => {
        observer.next(this.productsService.getProducts());
      }, 3000);
    }).pipe(
      //No puedo usar filter para este ejercicio
      map(products => products.filter(p=>p.stock>30)),
      map(products => products.map(p=>{
      return {...p,price:p.price*1*21}
    })));
  }
}
