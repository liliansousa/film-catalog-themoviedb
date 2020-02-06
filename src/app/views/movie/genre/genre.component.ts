import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieGenre } from 'src/common/interface/movie-genre-response.interface';

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


  ngOnInit() {
    this.getGenresList();
  }

  public getGenresList() {
    this.movieDBService.getMovieGenre().subscribe(el => {
      this.movieGenres = el[0].resp.genres; console.log(this.movieGenres)
    })
  }

}
