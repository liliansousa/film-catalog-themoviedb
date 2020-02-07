// @Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @Custom
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { MovieDetailsResponse } from 'src/common/interface/movie-details-response.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  private isLoading: boolean = false;
  private error: string = null;

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
      this.movieTitle = movie.title;
      this.movieDetails = movie;
      this.isLoading = false;
    })
  }

}
