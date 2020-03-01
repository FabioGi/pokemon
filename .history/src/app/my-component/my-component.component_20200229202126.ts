import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import { IPokemons, IPokemon } from '../ipokemons';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  pockemons: IPokemon [] = [];
  pokemon: Pokemon;

  test='';
  selected:any ;
  pockemon: IPokemon;
  id: Number;
  name: String;
  statistiques = [];
  selected2: string;
  constructor(private pokservice: PokemonServiceService) {

   }

  //  foo(data:IPokemons){
  //     console.log(data);

  //  }

  ngOnInit() {
    this.pokservice.getPokemons().subscribe( (data) => {
      console.log(data);
      data.pokemon_entries.forEach((e , index ) => this.pockemons.push({ entry_number : e.entry_number ,
                                                                         name: e.pokemon_species.name,
                                                                         url: e.pokemon_species.url,
                                                                         pokemon_species: e}));
    } );
    this.pokservice.getTest().subscribe((data)=>{
        console.log(data);
    });
  }
  checkPok(pok){
    this.pokemonData(pok);
  }

  pokemonData(pok: any) {
    this.statistiques = [] ;
    this.pokservice.getPokemon(pok).subscribe((data:Pokemon) => {
       data.stats.forEach((e) => {
         this.statistiques.push({name: e.stat.name, effort: e.effort, baseStat: e.base_stat});
       });
       this.pokemon = {id: data.id,
                       base_experience: data.base_experience,
                       height : data.weight,
                       weight: data.weight,
                       img: data.sprites.back_default,
                       stats:  this.statistiques,
                       name: data.name,
                       order: data.order,
                       sprites: data.sprites
                       };

         console.log( this.pokemon);
    });
  }
  selectPockemon(pok:any) {
    this.pokemonData(pok);
    this.selected2 = '';
  }

}
