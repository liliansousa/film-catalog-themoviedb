// Angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom App Views components
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
import { TopSearchFormComponent } from './component/top-search-form/top-search-form.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MoviedbMiniatureCardComponent } from './component/moviedb-miniature-card/moviedb-miniature-card.component';
import { LoadingComponent } from './component/loading/loading.component';
import { MovieCardLinkComponent } from './component/movie-card-link/movie-card-link.component';
import { MovieCastComponent } from './component/movie-cast/movie-cast.component';
import { FormatFields } from 'src/common/utils/FormatFields';
import { PaginationComponent } from './component/pagination/pagination.component';

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
    GenreComponent,
    TopSearchFormComponent,
    NotFoundComponent,
    MoviedbMiniatureCardComponent,
    LoadingComponent,
    MovieCardLinkComponent,
    MovieCastComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ThemoviedbService,
    FormatFields
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
