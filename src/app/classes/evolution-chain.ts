/* tslint:disable: variable-name */

/**
 * Evolution chain: describes a pokemons evolution chain
 */
export class EvolutionChain {
  baby_trigger_item?: any;
  chain: {
    evolution_details: any[];
    evolves_to: {
      evolution_details: {
        gender?: any;
        held_item?: any;
        item?: any;
        known_move?: any;
        known_move_type?: any;
        location?: any;
        min_affection?: any;
        min_beauty?: any;
        min_happiness?: any;
        min_level: number;
        needs_overworld_rain: boolean;
        party_species?: any;
        party_type?: any;
        relative_physical_stats?: any;
        time_of_day: string;
        trade_species?: any;
        trigger: {
          name: string;
          url: string;
        };
        turn_upside_down: boolean;
      };
      evolves_to: {
        evolution_details: {
          gender?: any;
          held_item?: any;
          item?: any;
          known_move?: any;
          known_move_type?: any;
          location?: any;
          min_affection?: any;
          min_beauty?: any;
          min_happiness?: any;
          min_level: number;
          needs_overworld_rain: boolean;
          party_species?: any;
          party_type?: any;
          relative_physical_stats?: any;
          time_of_day: string;
          trade_species?: any;
          trigger: {
            name: string;
            url: string;
          };
          turn_upside_down: boolean;
        }
        evolves_to: any[];
        is_baby: boolean;
        species: {
          name: string;
          url: string;
        };
      };
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
    };
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
}
