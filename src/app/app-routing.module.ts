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
  { path: 'movie', component: MovieComponent },
  { path: 'movie/discover', component: DiscoverComponent },
  { path: 'movie/genres', component: GenreComponent },
  { path: 'search', component: SearchComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
