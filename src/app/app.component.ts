import {Component, ViewChild} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormModalPokemonComponent } from "./views/admin-pokedex/components/component/form-modal-pokemon.component";
import { MatTableDataSource } from "@angular/material/table";

export interface PokemonTable {
  name: string;
  attack: number;
  defense: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  // @ts-ignore
  @ViewChild(DatatableComponent) table: DatatableComponent;


  public pokemons: PokemonTable[] = [];
  // dataSource:any;
  ColumnMode: any ;
  rows = [];
  temp = [];
  list: any;

  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Imagen', prop: 'image' },
    { name: 'Ataque', prop: 'attack' },
    { name: 'Defensa', prop: 'defense' },

  ];

  filter = {
    name: null
  };

  // tables: any = {
  //   column: [
  //     { name: 'Names', prop: 'name' },
  //     { name: 'Imagen', prop: 'image' },
  //     { name: 'Ataque', prop: 'attack' },
  //     { name: 'Defensa', prop: 'defense' }
  //   ],
  //   rows: new Array<PokemonTable>()
  // };


  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal

  ) {
  }

  ngOnInit(): void {
    this.loadTableData();
    this.pokemonService.getListPokemon(1)
      .subscribe( pokemon => {
      this.pokemons = pokemon;
      console.log(this.pokemons, 'api')

    });
  }

  loadTableData() {
    this.pokemonService.getListPokemon(
      1
    ).subscribe({
      next: (data) => {
        this.temp = data;
        this.rows = data;
        console.log(this.rows, 'rows')
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  addNew () {
    const componentRef = this.modalService.open(FormModalPokemonComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true,
    });
    componentRef.closed.subscribe(reason => {
      if (reason == 'success') {
        this.loadTableData();
      }
    });

  }

  setFilter(inputSearch: any) {
    const {value} = inputSearch.target;
    this.searchFilters(value.toLowerCase().trim());
  }

  searchFilters(value: any) {

  }

  editPokemon(row: any){
    console.log(row)
  }

  deletePokemon(row: any){
    console.log(row)
  }


}




