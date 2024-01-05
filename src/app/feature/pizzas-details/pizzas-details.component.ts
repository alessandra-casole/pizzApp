import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizzas } from 'src/app/models/pizzas';
import { PizzasService } from 'src/app/services/pizzas.service';
import { PizzasState } from 'src/app/state/pizzas-state';

@Component({
  selector: 'app-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.css'],
})
export class PizzasDetailsComponent implements OnInit {
  pizza?: Pizzas;
  id?: number;

  constructor(
    public pizzasState: PizzasState,
    public pizzasService: PizzasService,
    public route: ActivatedRoute,
    public http: HttpClient
  ) {
    const id = +route.snapshot.params['id'];
    console.log(id);
    this.http
      .get<Pizzas>(
        `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
      )
      .subscribe((res) => {
        this.pizza = res;
      });
  }

  ngOnInit(): void {
    this.pizzasService.getPizzas();
  }
}
