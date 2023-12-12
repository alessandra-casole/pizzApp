import { Injectable } from '@angular/core';
import { Pizzas } from '../models/pizzas';

@Injectable({
  providedIn: 'root',
})

export class PizzasState {

  pizzas: Pizzas[] = [];

  initialize(pizzas: Pizzas[]) {
    this.pizzas = pizzas;

    console.log(pizzas);
  }

  delete(id: number) {
    this.pizzas = this.pizzas.filter((pizza) => pizza.id !== id);
  }
}

