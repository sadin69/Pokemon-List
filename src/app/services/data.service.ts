import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl =  'https://pokeapi.co/api/v2/pokemon';

  constructor( private httpClient : HttpClient) { }


  public getPokemonData(limit: number, offset:number)
  {

    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;
    return this.httpClient.get(url);
  }

  public getDetailsOfPokemon(name: string)
  {
    
    return this.httpClient.get(`${this.apiUrl}/${name}`)
  }

  // check with errror for testing purpose to see the error handling.

  public checkWithError(){
    const url = `https://pokeapi.co/api/v2/type/300`;
    return this.httpClient.get(url);
  }

  



}


