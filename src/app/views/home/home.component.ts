import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movieList: MovieDiscoverItem[] = [];
  public popularMovies: MovieDiscoverItem[] = [];
  public isLoading: boolean = false;
  public error: string = null;

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.highlightedMovies();
    this.getPopularMovies();
  }

  public highlightedMovies() {
    // Section one content: section-highlighted-movies
    let movieFilter: MovieDiscoverRequest = {
      page: 1,
      primary_release_year: 2020,
      sort_by: 'popularity.desc',
      include_adult: false,
      with_original_language: 'en'
    }
    let gteDate = '2020-01-01', lteDate = '2020-02-01';
    this.movieDBService.getMoviesList(movieFilter, gteDate, lteDate).subscribe(moviesArray => {
      const featureMovies = [];
      for (let i = 0; i <= 5; i++) {
        featureMovies.push(moviesArray[3][i]);
      }
      this.movieList = featureMovies;
      this.isLoading = false;
    })
  }

  public getPopularMovies() {
    // Section Two content: section-popular-movies
    let movieFilter: MovieDiscoverRequest = {
      primary_release_year: 2019,
      sort_by: 'popularity.desc'
    }
    this.movieDBService.getMoviesList(movieFilter).subscribe(moviesArray => {
      const featureMovies = []
      for (let i = 0; i <= 2; i++) {
        featureMovies.push(moviesArray[3][i]);
      }
      this.popularMovies = featureMovies;
    })
  }

}
