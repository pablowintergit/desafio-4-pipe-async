import { Component } from '@angular/core';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrl: './async-observable-pipe.component.scss'
})
export class AsyncObservablePipeComponent {

  constructor(private productsService: ProductsService) { 


    
  }
}
