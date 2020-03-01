import { Component, OnInit } from '@angular/core';
// import { AuthService } from './core/auth.service';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {

  // action = {payload: {data: {_id: 'some'}}};
  // oldState = {a: '3'};
  // newState = {...this.oldState, [this.action.payload.data._id]: this.action.payload.data};
  constructor() { }

  ngOnInit() {
  	// this.artists = this.memberService.getArtistsList();
    sessionStorage.setItem( '1' , 'true');
    // console.log(this.newState);

  }

 

  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

}
