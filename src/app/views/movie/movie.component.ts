// @Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @Custom
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDetailsResponse } from 'src/common/interface/movie-details-response.interface';
import { MovieCast } from 'src/common/interface/movie-credits-response.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  public isLoading: boolean = false;
  public error: string = null;
  public movieCast: MovieCast[] = [];
  constructor(
    private movieDBService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }

  public movieDetails: MovieDetailsResponse;
  public movieTitle: string;
  private movieId: number;

  ngOnInit() {
    this.isLoading = true;
    this.movieId = this.route.snapshot.params['id'];
    this.getMovie(this.movieId)
  }

  public getMovie(id: any) {
    this.movieDBService.getMovieDetails(id).subscribe(movie => {
      this.getCredits(id);
      this.movieTitle = movie.title;
      this.movieDetails = movie;
      this.isLoading = false;
    })
  }

  public getCredits(id) {
    this.movieDBService.getMovieCredits(id).subscribe(resp => {
      let mainCast = resp[1]

      for (let i = 0; i < 6; i++) {
        this.movieCast.push(mainCast[i]);
      }

    })
  }

}
