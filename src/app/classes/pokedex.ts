/**
 * Pokedex class: contains a list of Pokemon
 */
export class Pokedex {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  };
}
