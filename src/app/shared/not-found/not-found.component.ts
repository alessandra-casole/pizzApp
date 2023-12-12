import { Component } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container text-center mt-5">
      <h1>Oops! Pagina non trovata.</h1>
      <p>
        Abbiamo cercato ovunque, ma sembra che questa pagina sia scappata come
        una pizza calda dal forno!
      </p>
      <img
        [src]="pizzasService.notFoundImg"
        alt="Pizza"
        class="img-fluid mt-2"
        width="400"
      />
      <p class="mt-1">
        Forse vuoi tornare alla <a routerLink="/">pagina principale</a> e
        ordinare una deliziosa pizza?
      </p>
    </div>
  `,
  styles: [],
})
export class NotFoundComponent {
  constructor(public pizzasService: PizzasService) {}
}
