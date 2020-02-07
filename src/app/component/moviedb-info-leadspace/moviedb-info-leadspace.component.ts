import { Component, OnInit, Input } from '@angular/core';
import { MovieDetailsResponse } from 'src/common/interface/movie-details-response.interface';

@Component({
  selector: 'app-moviedb-info-leadspace',
  templateUrl: './moviedb-info-leadspace.component.html',
  styleUrls: ['./moviedb-info-leadspace.component.scss']
})
export class MoviedbInfoLeadspaceComponent implements OnInit {
  
  constructor() { }

  @Input() movieTitle: string;
  @Input() movieDetails: MovieDetailsResponse;
  public movieBg: string = 'https://image.tmdb.org/t/p/w1400_and_h450_face/'

  ngOnInit() { 

  }

}

