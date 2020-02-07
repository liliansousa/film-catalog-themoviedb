import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  public isLoading: boolean = false;
  public error: string = null;

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  public movieGenres: MovieGenre[];
  public movieList: MovieDiscoverItem[] = [];
  public movieFilter: MovieDiscoverRequest;
  public movieGategory: string;

  selectedValue: MovieGenre = { id: 12, name: 'Ação' };
  genreFilterForm: FormGroup;

  ngOnInit() {
    this.isLoading = true;
    this.getGenresList();
    this.filterGenre(this.selectedValue.id);
    this.movieGategory = this.selectedValue.name;
    this.genreFilterForm = new FormGroup({
      'movieGenre': new FormControl('28'),
    })
  }

  public getGenresList() {
    this.movieDBService.getMovieGenre().subscribe(el => {
      this.movieGenres = el[0].resp.genres;
      return this.movieGenres;
    })
  }

  public filterGenre(id: number) {
    this.movieFilter = {
      with_genres: id.toString(),
      sort_by: 'popularity.desc',
      include_adult: false,
      page: 1
    }
    this.getMovieList(this.movieFilter);
  }

  public onSubmit() {
    this.isLoading = true;
    this.filterGenre(this.genreFilterForm.value.movieGenre);
    for (let i = 0; i <= this.movieGenres.length; i++) {
      if (this.movieGenres[i].id == this.genreFilterForm.value.movieGenre) {
        this.movieGategory = this.movieGenres[i].name;
      }
    }
  }

  public getMovieList(filter: MovieDiscoverRequest) {
    this.movieDBService.getMoviesList(filter).subscribe(moviesArray => {
      this.movieList = moviesArray[3];
      this.isLoading = false;
    })
  }


}

