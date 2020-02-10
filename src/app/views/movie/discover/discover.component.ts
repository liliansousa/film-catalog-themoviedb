import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// @Custom
import { MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  public isLoading: boolean = false;
  public error: string = null;

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  public movieList: MovieDiscoverItem[] = [];
  public genres: MovieGenre[] = [];
  public releaseYear: number[]
  public sortBy = [];
  public activePage: number = 1;
  public totalPages: number;

  public nextBtn: boolean = false;
  public previousBtn: boolean = false;

  movieFilterForm: FormGroup;

  ngOnInit() {
    this.isLoading = true;
    this.movieFilterForm = new FormGroup({
      'movieYear': new FormControl(2019),
      'movieSort': new FormControl('popularity.desc', Validators.required),
      'movieGenre': new FormControl(''),
      'movieKeywords': new FormControl(null)
    });
    this.setFormOptions();
  }

  public setFormOptions() {
    this.getGenresList();
    this.sortBy = [
      { id: 'popularity.desc', value: 'Popularidade (maior)' },
      { id: 'popularity.asc', value: 'Popularidade (menor)' },
      { id: 'vote_average.desc', value: 'Avaliação (melhor)' },
      { id: 'vote_average.asc', value: 'Avaliação (pior)' },
      { id: 'primary_release_date.desc', value: 'Lançamento (novo)' },
      { id: 'primary_release_date.asc', value: 'Lançamento (antigo)' },
      { id: 'title.asc', value: 'Título (A–Z)]' },
      { id: 'title.desc', value: 'Título (Z–A)' }
    ];

    this.releaseYear = [
      2020, 2019, 2018, 2017, 2016,
      2015, 2014, 2013, 2012, 2011,
      2010, 2009, 2008, 2007, 2006,
      2005, 2004, 2003, 2002, 2001,
      2000, 1999, 1998, 1997, 1996,
      1995, 1994, 1993, 1992, 1991,
      1990
    ];

    this.setMovieFilter();
  }

  public getGenresList() {
    this.movieDBService.getMovieGenre().subscribe(el => {
      this.genres = el[0].resp.genres;
    })
  }

  public setMovieFilter(filter?: any) {
    let movieFilter = [];
    movieFilter.push({
      sort_by: filter ? filter.movieSort : 'popularity.desc',
      with_genres: filter? filter.movieGenre : '',
      primary_release_year: filter ? filter.movieYear : 2019,
      with_keywords: filter? filter.movieKeywords : '',
      include_adult: false,
      page: this.activePage
    });

    this.getMovieList(movieFilter as MovieDiscoverRequest);
  }

  public getPage(value: any) {
    this.activePage = value;
    this.setMovieFilter(this.movieFilterForm.value);
  }

  public nextPage() {
    if (this.activePage < this.totalPages) {
      this.activePage += 1;
      this.getPage(this.activePage);
    }
  }

  public previousPage() {
    if (this.activePage > 1) {
      this.activePage -= 1;
      this.getPage(this.activePage);
    }
  }

  public onSubmit() {
    this.isLoading = true;
    this.setMovieFilter(this.movieFilterForm.value);
  }

  public getMovieList(movieFilter: MovieDiscoverRequest) {
    this.movieDBService.getMoviesList(movieFilter[0]).subscribe(moviesArray => {
      this.totalPages = moviesArray[2];
      this.movieList = moviesArray[3];

      if (this.activePage > 1) {
        this.previousBtn = true;
      } else {
        this.previousBtn = false;
      }

      if (this.activePage < this.totalPages) {
        this.nextBtn = true;
      } else {
        this.nextBtn = false;
      }

      this.isLoading = false;
    })
  }

}
