import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private http: HttpClient) { }

  // @ts-ignore
  getListPokemon(id: number): Observable<any>{
    const params = {
      idAuthor: id
    }
    // https://bp-pokemons.herokuapp.com/:id
    return this.http.get<any>(environment.api, { params } )
  }

}




