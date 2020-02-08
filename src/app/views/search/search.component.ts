import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDiscoverItem } from 'src/common/interface/movie-discover-response.interface.';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private movieDBService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }

  public isLoading: boolean = false;
  public searchQuery: string = '';
  public hasResult: boolean = false;
  public sidebarMessage: string;
  public movieList: MovieDiscoverItem[] = [];

  ngOnInit() {
    this.isLoading = true;

    this.route.params.subscribe(
      (seachQuery: Params) => {
        this.searchQuery = seachQuery['query'];
        this.getSearchByQuery();
      }
    );
  }

  public getSearchByQuery() {
    if (this.searchQuery != undefined) {
      this.movieDBService.search(this.searchQuery).subscribe(resultArray => {
        this.movieList = resultArray[3];
        this.hasResult = this.movieList.length >= 1 ? true : false;
        this.sidebarMessage = 'Resultado para: ' + this.searchQuery;
        this.isLoading = false;
      })
    } else {
      this.sidebarMessage = 'Nenhum resultado para a busca!';
      this.isLoading = false;
    }
  }

}
