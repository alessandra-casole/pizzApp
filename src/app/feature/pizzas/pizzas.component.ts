import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { PizzasState } from 'src/app/state/pizzas-state';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  constructor(public pizzasState: PizzasState, public pizzasService: PizzasService ) {}


  ngOnInit(): void {
    this.pizzasService.getPizzas();
  }
}
