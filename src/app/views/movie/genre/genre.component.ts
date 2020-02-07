import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  public movieGenres: MovieGenre[];
  public movieList: MovieDiscoverItem[] = [];
  public movieFilter: MovieDiscoverRequest;
  public movieGategory: string;
  selectedValue = null;

  ngOnInit() {
    this.getGenresList();
  }

  public getGenresList() {
    this.movieDBService.getMovieGenre().subscribe(el => {
      this.movieGenres = el[0].resp.genres;
      this.filterGenre(this.movieGenres[0])
    })
  }

  public filterGenre(gender: MovieGenre) {
    this.movieGategory = gender.name;
    this.movieFilter = {
      with_genres: gender.id.toString(),
      sort_by: 'popularity.desc',
      include_adult: false,
      page: 1
    }
    this.getMovieList(this.movieFilter);
  }

  public getMovieList(filter: MovieDiscoverRequest) {
    this.movieDBService.getMoviesList(filter).subscribe(moviesArray => {
      this.movieList = moviesArray[3];
    })
  }

}
