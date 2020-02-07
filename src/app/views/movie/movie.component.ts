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
  public movieDetails: MovieDetailsResponse;
  public movieTitle: string;
  private movieId: number;
  
  constructor(
    private movieDBService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.movieDBService.getMovieDetails(this.movieId).subscribe(movie => {
      this.movieTitle = movie.title;
      this.movieDetails = movie;
    })
  }


}
