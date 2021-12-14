import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorHandlingComponent } from './http-error-handling/http-error-handling.component';


const routes: Routes = [
  {path:'About', component: AboutComponent, data:{title:'Pokemon - About'}},
  {path:'DetailPage/:id', component: DetailPageComponent, data:{title:'Pokemon-DetailPage'}},
  {path:'PokemonList', component: PokemonListComponent, data:{title:'Pokemon-list'}},
  {path: 'ErrorHandling', component: HttpErrorHandlingComponent, data:{ title: 'Pokemon-ErrorHandling'}},
  {path: '**', component: HomeComponent, data:{title: 'Pokomon - Home'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
