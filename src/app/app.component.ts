import {Component, ViewChild} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import { MatTableDataSource } from '@angular/material/table';

import {DatatableComponent} from "@swimlane/ngx-datatable";

export interface PokemonTable {
  name: string;
  image: string;
  attack: number;
  defense: number;
}

export class Page {
  size: number = 0;
  totalElements: number = 0;
  totalPages: number = 0;
  pageNumber: number = 0;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public pokemons: PokemonTable[] = [];
  dataSource:any;
  ColumnMode: any;
  rows = [];
  temp = [];

  tablePage = new Page();
  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Imagen', prop: 'image' },
    { name: 'Ataque', prop: 'attack' },
    { name: 'Defensa', prop: 'defense' }
  ];

  tables: any = {
    column: [
      { name: 'Name', prop: 'name' },
      { name: 'Imagen', prop: 'image' },
      { name: 'Ataque', prop: 'attack' },
      { name: 'Defensa', prop: 'defense' }
    ],
    rows: new Array<PokemonTable>(),
    isLoading: false,
  };


  constructor(
    private pokemonService: PokemonService

  ) {
    this.tablePage.pageNumber = 0;
    this.tablePage.size = 10;
  }

  ngOnInit(): void {
    this.loadTableData();
    this.dataSource = new MatTableDataSource(this.pokemons);
    this.pokemonService.getListPokemon(1)
      .subscribe( pokemon => {
      this.pokemons = pokemon;
      console.log(this.pokemons, 'api')

    });
  }

  loadTableData(pageInfo: any = { offset: 0 }) {
    this.tablePage.pageNumber = pageInfo.offset;
    this.pokemonService.getListPokemon(
      1
    ).subscribe({
      next: (data) => {
        this.tablePage.totalElements = data.count;
        this.table.rows = data.rows;
        console.log(data, 'data')
        console.log(this.tables.rows, 'rows')
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  filter(event: Event) {
    const filters = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filters.trim().toLowerCase();
    console.log(filters , 'filters')
  }





}




