import { Component } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav
      class="navbar sticky-top navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
      role="navigation"
    >
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center gap-1" routerLink="/">
          <img
            [src]="pizzasService.logo"
            alt="Logo"
            width="30"
            class="d-inline-block rounded-circle"
          />
          PizzApp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <a class="nav-link" routerLink="/home" routerLinkActive="active"
                >Home</a
              >
            </li>
            <li
              class="nav-item"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <a class="nav-link" routerLink="/menu" routerLinkActive="active"
                >Menu</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  constructor(public pizzasService: PizzasService) {}
}
