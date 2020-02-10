import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from 'src/app/services/pokedexapi.service';
import { Pokedex } from 'src/app/classes/pokedex';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `
  <div class="sidebar">
    <ul *ngIf="listOfPokemon">
      <li *ngFor="let pokemon of listOfPokemon.results" id="pokemon-{{pokemon.name}}">
        <a routerLink="pokemon/{{getIdFromURL(pokemon.url)}}" routerLinkActive="selected">
          <img src="https://projectpokemon.org/images/normal-sprite/{{pokemon.name.replace('-', '_')}}.gif"  alt="Sprite of {{pokemon.name | titlecase}}" style="width: 30px; height: auto;">
          {{ pokemon.name | titlecase }}
        </a>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /**
   * List of pokemon of sidebar component
   */
  listOfPokemon: Pokedex;
  /**
   * Current url of sidebar component
   */
  currentUrl: string;

  /**
   * Creates an instance of sidebar component.
   * @param pds
   * @param router
   */
  constructor(private pds: PokedexApiService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
    this.pds.getAll().subscribe(
      data => {
        this.listOfPokemon = data;
      }
    );
  }

  /**
   * Gets id from url
   * @param url
   * @returns
   */
  getIdFromURL(url: string) {
    // splits url and returns ID
    const splitted = url.split('/');
    return splitted[6];
  }

}
