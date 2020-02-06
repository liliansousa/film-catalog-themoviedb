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
  public movieFilter: MovieDiscoverRequest = {
    page: 1,
    primary_release_year: 2020,
    sort_by: 'popularity.desc',
    include_adult: false,
    with_original_language: 'en'
  }

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  ngOnInit() {
    let gteDate = '2020-01-01', lteDate = '2020-02-01';
    this.movieDBService.getMoviesList(this.movieFilter, gteDate, lteDate).subscribe(moviesArray => {
      const featureMovies = []
      for (let i = 0; i <= 2; i ++) {
        featureMovies.push(moviesArray[3][i]);
      }
      this.movieList = featureMovies; console.log(featureMovies)
    })
  }

}
