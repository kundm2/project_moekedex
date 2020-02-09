import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from 'src/app/services/pokedexapi.service';
import { Pokedex } from 'src/app/classes/pokedex';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
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
