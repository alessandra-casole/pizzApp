import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <h2 class="mt-5 text-center mb-3">Scegli la pizza che desideri ordinare</h2>
    <div class="container d-flex flex-column align-items-center mb-5">
      <app-cart></app-cart>
      <app-pizzas></app-pizzas>
    </div>
  `,
  styles: [],
})
export class MenuComponent {}
