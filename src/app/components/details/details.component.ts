import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokedexApiService } from 'src/app/services/pokedexapi.service';
import { Pokemon } from 'src/app/classes/pokemon';
import { PokemonSpecies } from 'src/app/classes/pokemon-species';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemonNr: number;
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;

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

}
