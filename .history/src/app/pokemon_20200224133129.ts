export class Pokemon {
    id: number;
    name: string;
    order: number;
    height: number;
    weight: number;
    img: string;
    // tslint:disable-next-line:variable-name
    base_experience: number;
    stats: any[];
    sprites: any;

}

export class stats {
   name: string;
   baseStat: number;
   effort: number;
}
