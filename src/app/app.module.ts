import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MoviedbCardBoxComponent } from './component/moviedb-card-box/moviedb-card-box.component';
import { MoviedbInfoLeadspaceComponent } from './component/moviedb-info-leadspace/moviedb-info-leadspace.component';
import { HomeComponent } from './views/home/home.component';
import { MovieComponent } from './views/movie/movie.component';
import { ThemoviedbService } from './services/themoviedb.service';
import { SearchComponent } from './views/search/search.component';
import { DiscoverComponent } from './views/movie/discover/discover.component';
import { GenreComponent } from './views/movie/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviedbCardBoxComponent,
    MoviedbInfoLeadspaceComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    DiscoverComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ThemoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }