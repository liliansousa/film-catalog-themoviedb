import { Component, OnInit, Input} from '@angular/core';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';

@Component({
  selector: 'app-moviedb-card-box',
  templateUrl: './moviedb-card-box.component.html',
  styleUrls: ['./moviedb-card-box.component.scss']
})
export class MoviedbCardBoxComponent implements OnInit {

  @Input() elementData: MovieDiscoverItem;

  constructor() { }

  ngOnInit() {

  }

}
