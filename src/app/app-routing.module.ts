import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovieComponent } from './views/movie/movie.component';
import { SearchComponent } from './views/search/search.component';
import { DiscoverComponent } from './views/movie/discover/discover.component';
import { GenreComponent } from './views/movie/genre/genre.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'discover/movie', component: DiscoverComponent },
  { path: 'genres/movie', component: GenreComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
