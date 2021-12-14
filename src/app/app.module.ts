import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { HttpErrorHandlingComponent } from './http-error-handling/http-error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    PokemonListComponent,
    AboutComponent,
    NavBarComponent,
    HomeComponent,
    UnitTestComponent,
    HttpErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
   
  ],
  providers: [DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
