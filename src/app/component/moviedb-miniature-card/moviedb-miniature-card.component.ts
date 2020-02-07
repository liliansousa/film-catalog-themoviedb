import { Component, OnInit, Input } from '@angular/core';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';
import { FormatFields } from 'src/common/utils/FormatFields';

@Component({
  selector: 'app-moviedb-miniature-card',
  templateUrl: './moviedb-miniature-card.component.html',
  styleUrls: ['./moviedb-miniature-card.component.scss']
})
export class MoviedbMiniatureCardComponent implements OnInit {
  @Input() elementData: MovieDiscoverItem;
  public formatData: FormatFields;

  constructor() { }

  ngOnInit() {
  }

}
