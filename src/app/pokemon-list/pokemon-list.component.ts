import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  Pokemonlist: any[] = [];
  errorResponse: any
  loading :any
  errorMessage: any

  page =1;
  totalPokomon : any;

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {

    this.retrivePokemonLis();

  }

  retrivePokemonLis(){
    this.loading = true;
    this.dataService.getPokemonData(10, this.page+0 )
    .subscribe((res: any) => {
      this.totalPokomon = res.count;
    res.results.forEach((result: any) => {
      this.dataService.getDetailsOfPokemon(result.name)
      .subscribe((response: any) =>{
        this.Pokemonlist.push(response);
        setTimeout(() => this.loading = false, 3000); // this is just for to visible the loading for a bit longer 
        //becuase we here a small data and the loading button disapper quickly
      });
    });
  } ,(error: any ) => {
    console.log('No Response from the Server or there is some error in the component');
    this.errorMessage= error;
    this.loading = false;

  });
  }

  

  


}
