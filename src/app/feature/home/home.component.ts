import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { PizzasState } from 'src/app/state/pizzas-state';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="mt-5 text-center">
      Le nostre pizze
      <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
        <path
          d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
        />
      </svg>
    </h1>
    <div class="container">
      <div class="container px-0 d-flex mt-5 mb-5">
        <div class="row row-cols-2 row-cols-lg-3 g-2 mt-3">
          <div class="col" *ngFor="let pizza of pizzasState.pizzas">
            <a
              class="btn"
              [routerLink]="['/pizza', pizza.id]"
              title="Vedi dettagli"
            >
              <div class="card shadow-sm mt-3 h-100">
                <img
                  src="{{ pizza.image }}"
                  class="card-img"
                  [alt]="pizza.name"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      svg {
        fill: #aa2a0f;
      }

      .card:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
      }

      .modal-body {
        width: 70%;
      }

      .modal:hover .card:hover {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    public pizzasState: PizzasState,
    public pizzasService: PizzasService
  ) {}

  ngOnInit(): void {
    this.pizzasService.getPizzas();
  }
}
