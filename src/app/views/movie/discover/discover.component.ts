import { Component, OnInit } from '@angular/core';
import { MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  public movieList: MovieDiscoverItem[] = [];
  public movieFilter = {
    primary_release_year: 2019,
    sort_by: 'popularity.desc'
  };
  public releaseYear: number[] = [
    2020, 2018, 2017, 2016, 2015,
    2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006, 2005,
    2004, 2003, 2002, 2001, 2000
  ];

  public sortBy = [
    { id: 'popularity.desc', value: 'Popularidade (maior)' },
    { id: 'popularity.asc', value: 'Popularidade (menor)' },
    { id: 'vote_average.desc', value: 'Avaliação (melhor)' },
    { id: 'vote_average.asc', value: 'Avaliação (pior)' },
    { id: 'primary_release_date.desc', value: 'Lançamento (novo)' },
    { id: 'primary_release_date.asc', value: 'Lançamento (antigo)' },
    { id: 'title.asc', value: 'Título (A–Z)]' },
    { id: 'title.desc', value: 'Título (Z–A)' },
  ];

  public genres: MovieGenre[] = [
    { "id": 28, "name": "Ação" },
    { "id": 12, "name": "Aventura" },
    { "id": 16, "name": "Animação" },
  ]

  ngOnInit() {
    this.getMovieList();
  }

  public getMovieList() {
    this.movieDBService.getMoviesList(this.movieFilter, '').subscribe(moviesArray => {
      this.movieList = moviesArray[3];
    })
  }

}
