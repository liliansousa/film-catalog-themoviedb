import { Component, OnInit, Input } from '@angular/core';
import { MovieCast } from 'src/common/interface/movie-credits-response.interface';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {
  @Input() elementData: MovieCast;
  constructor() { }

  ngOnInit() {
  }

}
