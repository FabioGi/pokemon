import { Pokemon } from './../pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-affiche-infos',
  templateUrl: './affiche-infos.component.html',
  styleUrls: ['./affiche-infos.component.css']
})
export class AfficheInfosComponent implements OnInit {

  constructor() {}
 // poketList: any;
   @Input()
  pokemon:Pokemon;
  // @Input()
  // id:string;
  // @Input()
  // name:string;
  ngOnInit() {
    // console.log(this.id);
    // console.log(this.name);
    console.log(this.pokemon.name);

  //  })
  }

}
