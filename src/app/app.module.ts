import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './ui/angularmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 


import 'hammerjs';

import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { AfficheInfosComponent } from './affiche-infos/affiche-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    // PageNotFoundComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    AfficheInfosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sir' }),
    CommonModule,
    HttpModule,
    HttpClientModule,
   // BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
// sir

    FormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class AppModule { }
