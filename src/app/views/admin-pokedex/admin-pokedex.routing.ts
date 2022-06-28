import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonComponent} from "./components/pokemon/pokemon.component";

const routes: Routes = [


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),


  ],
  exports: [RouterModule]
})
export class AdminPokedexRouting { }
