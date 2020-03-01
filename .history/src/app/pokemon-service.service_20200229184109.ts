import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemons, IPokemon } from './ipokemons';
import { Pokemon } from './pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private httpClient: HttpClient ) { }


  public getPokemons() : Observable<IPokemons> {
    return this.httpClient.get<IPokemons>(`https://pokeapi.co/api/v2/pokedex/1`);
  }
  public addpokemon(poke: IPokemon) : Observable<IPokemons>{
    return this.httpClient.post<IPokemons>(`https://pokeapi.co/api/v2/addpokemon`, poke);
  }
  public getPokemon(pokemon: IPokemon): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(pokemon.url);
  }
 // http://localhost:8080/allergies
 public getTest() {
  return this.httpClient.get(`http://localhost:8080/allergies`);
  }
}
