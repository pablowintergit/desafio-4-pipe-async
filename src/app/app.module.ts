import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncObservablePipeComponent,
    AsyncPromisePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
