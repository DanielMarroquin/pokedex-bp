import { Component } from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import { MatTableDataSource } from '@angular/material/table';

import {tap} from "rxjs";

export interface PokemonTable {
  name: string;
  image: string;
  attack: number;
  defense: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pokemons: PokemonTable[] = [];
  dataSource:any;
  table: string[] = ['Nombre', 'Image', 'Ataque', 'Defensa', ];


  constructor(
    private pokemonService: PokemonService

  ) {
    // this.pokemonService.getListPokemon(1).pipe(
      // tap( res => console.log(res, 'api') )
    // ).subscribe()
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.pokemons);
    this.pokemonService.getListPokemon(1)
      .subscribe( pokemon => {
      this.pokemons = pokemon;
      console.log(this.pokemons, 'api')
    });
  }

  filter(event: Event) {
    const filters = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filters.trim().toLowerCase();
    console.log(filters , 'filters')
  }





}




