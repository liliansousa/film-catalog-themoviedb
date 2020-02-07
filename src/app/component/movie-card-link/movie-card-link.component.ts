import { Component, OnInit, Input } from '@angular/core';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';

@Component({
  selector: 'app-movie-card-link',
  templateUrl: './movie-card-link.component.html',
  styleUrls: ['./movie-card-link.component.scss']
})
export class MovieCardLinkComponent implements OnInit {
  @Input() elementData: MovieDiscoverItem;

  constructor() { }

  ngOnInit() {
  }

}
