import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top header-bg">
    <div class="container">
      <a class="navbar-brand" routerLink="">Pokedex</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="pokemon/1">Gen 1</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="pokemon/152">Gen 2</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
