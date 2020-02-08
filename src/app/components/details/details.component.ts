import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokedexApiService } from 'src/app/services/pokedexapi.service';
import { Pokemon } from 'src/app/classes/pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  pokemonNr: number;
  pokemon: Pokemon;

  constructor(private pds: PokedexApiService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.pokemonNr = params.nr;
      this.pds.getPokemon(this.pokemonNr).subscribe(
        data => {
          this.pokemon = data;
        }
      );
    });
  }

  ngOnInit() {
    this.pds.getPokemon(this.pokemonNr).subscribe(
      data => {
        this.pokemon = data;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
