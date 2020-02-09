import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokedexApiService } from 'src/app/services/pokedexapi.service';
import { Pokemon } from 'src/app/classes/pokemon';
import { PokemonSpecies } from 'src/app/classes/pokemon-species';
import { faWeight, faArrowsAltV, faEgg, faMars, faVenus, faTransgenderAlt, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  /**
   * Pokemon nr of details component
   */
  pokemonNr: number;
  /**
   * Pokemon  of details component
   */
  pokemon: Pokemon;
  /**
   * Pokemon species of details component
   */
  pokemonSpecies: PokemonSpecies;

  // Icons
  faWeight = faWeight;
  faArrowsAltV = faArrowsAltV;
  faEgg = faEgg;
  faMars = faMars;
  faVenus = faVenus;
  faSmileBeam = faSmileBeam;

  /**
   * Creates an instance of details component.
   * @param pds
   * @param route
   */
  constructor(private pds: PokedexApiService, private route: ActivatedRoute) {
    this.loadData();
  }

  ngOnInit() {
    this.pds.getPokemon(this.pokemonNr).subscribe(
      data => {
        this.pokemon = data;
      }
    );
  }

  /**
   * Loads data within constructor
   */
  loadData(): void {
    this.route.params.subscribe( params => {
      this.pokemonNr = params.nr;
      this.pds.getPokemon(this.pokemonNr).subscribe(
        data => {
          this.pokemon = data;
        }
      );
      this.pds.getPokemonSpecies(this.pokemonNr).subscribe(
        data => {
          this.pokemonSpecies = data;
        }
      );
    });
  }

  /**
   * Gets stat abbreviation
   * @param stat
   * @returns stat abbr
   */
  getStatAbbr(stat: string): string {
    switch (stat) {
      case 'speed': return 'SPD'; break;
      case 'special-defense': return 'S.DEF'; break;
      case 'special-attack': return 'S.ATT'; break;
      case 'defense': return 'DEF'; break;
      case 'attack': return 'ATT'; break;
      case 'hp': return 'HP'; break;
      default: break;
    }
  }
}
