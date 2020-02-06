import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  public movieList: MovieDiscoverItem[] = [];
  public movieFilter: MovieDiscoverRequest = {
    page: 1
  }

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.movieDBService.getMoviesList(this.movieFilter, '').subscribe(moviesArray => {
      this.movieList = moviesArray[3];
    })
  }


}
