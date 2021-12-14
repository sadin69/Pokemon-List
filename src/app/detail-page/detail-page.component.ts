import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {


  parameter: any;
  Pokemonlist: any[] = [];
  loading :any

  constructor(private dataService : DataService) {

   }



  ngOnInit(): void {

    const url = location.href;
    const params = url.split('/');
    
    this.parameter = params[4];
    console.log(params);
    console.log(this.parameter); 

    // call the pokemon detail function
    this.getPokemonDetail();
    
  
  
  }

  public getPokemonDetail() {

    this.dataService.getDetailsOfPokemon(this.parameter)
    .subscribe((response: any) =>{
      this.Pokemonlist.push(response);
       this.loading = false, 3000; // this is just for to visible the loading for a bit longer 
      //becuase we here a small data and the loading button disapper quickly
    });
 
  }



  



}
