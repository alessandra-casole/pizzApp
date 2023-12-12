import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzasState } from '../state/pizzas-state';
import { Pizzas } from '../models/pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  // Navbar logo
  logo =
    'https://raw.githubusercontent.com/zoelounge/menupizza/main/images/logo.jpeg';

  // Not Found Page
  notFoundImg =
    'https://images.pexels.com/photos/18912713/pexels-photo-18912713/free-photo-of-questo-e-il-primo-piano-della-mia-pizza-di-halloween-a-lievitazione-naturale-con-base-di-zucca-salvia-mozzarella-cipolla-rossa-olio-di-semi-di-zucca.jpeg';

  // Cart repo
  items: Pizzas[] = [];
  total: number = 0;

  getPizzas() {
    return this.http
      .get<Pizzas[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((result) => {
        this.pizzasState.initialize(result);
      });
  }

  getPizza(index: number) {
    return this.pizzasState.pizzas[index];
  }

  deletePizzas(id: number) {
    return this.http
      .delete(
        `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
      )
      .subscribe((result) => {
        console.log(result);
        this.pizzasState.delete(id);
        this.removeItemFromCart(id);
      });
  }

  addToCart(pizza: Pizzas) {
    const existingItem = this.items.find((item) => item.id === pizza.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      pizza.quantity = 1;
      this.items.push(pizza);
    }

    this.calculateTotal();
  }

  removeFromCart(pizza: Pizzas) {
    const existingItem = this.items.find((item) => item.id === pizza.id);

    if (existingItem) {
      existingItem.quantity--;

      if (existingItem.quantity === 0) {
        this.items = this.items.filter((item) => item.id !== pizza.id);
      }
    }

    this.calculateTotal();
  }

  removeItemFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }

  clearCart() {
    window.location.reload();
  }

  constructor(public http: HttpClient, public pizzasState: PizzasState) {}
}
