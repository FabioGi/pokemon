export interface IPokemons {
    pokemon_entries: IPokemon[];

}
export interface IPokemon {
    entry_number: number;
    name: string;
    url: string;
    pokemon_species: any;
}
