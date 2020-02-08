import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Pokedex } from '../classes/pokedex';
import { Observable } from 'rxjs';
import { Pokemon } from '../classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  baseurl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokedex> {
    return this.getPokedexFrom(0, 151);
  }

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

}
