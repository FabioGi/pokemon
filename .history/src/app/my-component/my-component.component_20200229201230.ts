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
/*    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];*/

  test='';
  selected:any ;
  pockemon: IPokemon;
  id: Number;
  name: String;
  statistiques = [];
  selected2: string;
  constructor(private pokservice: PokemonServiceService) {

   }

   foo(data:IPokemons){
      console.log(data);
     // data.results.forEach((e , index ) => this.pockemons.push({ name: e.name, id : index}));
     // this.articles = data['articles'];

   }

  ngOnInit() {
    this.pokservice.getPokemons().subscribe( (data) => {
      console.log(data);
      data.pokemon_entries.forEach((e , index ) => this.pockemons.push({ id : e.entry_number ,
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

  // teste(value:Pokemon){
  //    this.pockemon = value;
  //    console.log( this.pockemon);
  // }

}
