import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pokedex } from '../classes/pokedex';
import { Observable } from 'rxjs';
import { Pokemon } from '../classes/pokemon';
import { PokemonSpecies } from '../classes/pokemon-species';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  baseurl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }


  /**
   * Gets all Pokemon in the Pokedex
   * @returns Pokedex
   */
  getAll(): Observable<Pokedex> {
    return this.getPokedexFrom(0, 151);
  }

  /**
   * Gets pokedex within a specific range
   * @param offset
   * @param limit
   * @returns Pokedex within a specific range
   */
  getPokedexFrom(offset: number, limit: number): Observable<Pokedex> {
    return new Observable<Pokedex>( (subscriber) => {
      return this.http.get(this.baseurl + 'pokemon?offset=' + offset + '&limit=' + limit).subscribe(
        (data: Pokedex) => {
          subscriber.next(data);
          subscriber.complete();
        },
        error => {
          subscriber.error(error);
      });
    });
  }

  /**
   * Gets pokemon details
   * @param nr
   * @returns Pokemon details
   */
  getPokemon(nr: number): Observable<Pokemon> {
    return new Observable<Pokemon>( (subscriber) => {
      return this.http.get(this.baseurl + 'pokemon/' + nr).subscribe(
        (data: Pokemon) => {
          subscriber.next(data);
          subscriber.complete();
        },
        error => {
          subscriber.error(error);
      });
    });
  }

  /**
   * Gets pokemon species
   * @param nr
   * @returns pokemon species details
   */
  getPokemonSpecies(nr: number): Observable<PokemonSpecies> {
    return new Observable<PokemonSpecies>( (subscriber) => {
      return this.http.get(this.baseurl + 'pokemon-species/' + nr).subscribe(
        (data: PokemonSpecies) => {
          subscriber.next(data);
          subscriber.complete();
        },
        error => {
          subscriber.error(error);
      });
    });
  }
}
