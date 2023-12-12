import { Component } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public pizzasService: PizzasService ) {}
}
