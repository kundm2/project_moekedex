import { TestBed } from '@angular/core/testing';

import { PokedexapiService } from './pokedexapi.service';

describe('PokedexapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexapiService = TestBed.get(PokedexapiService);
    expect(service).toBeTruthy();
  });
});
