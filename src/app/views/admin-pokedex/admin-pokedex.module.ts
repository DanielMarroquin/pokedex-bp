import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPokedexRouting } from './admin-pokedex.routing';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {AppModule} from "../../app.module";
import { FormModalPokemonComponent } from './components/component/form-modal-pokemon.component'


@NgModule({
  declarations: [
    PokemonComponent,
    FormModalPokemonComponent
  ],
  imports: [
    CommonModule,
    AdminPokedexRouting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,

  ],
  providers: [AppModule],

  exports: [
    PokemonComponent
  ]
})
export class AdminPokedexModule { }
