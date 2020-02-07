import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private isLoading: boolean = false;
  private error: string = null;
  
  constructor(
    private movieDBService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }

  public searchQuery: string;
  public hasResult: boolean = false;
  public totalSearchResult: number;

  ngOnInit() {
    this.isLoading = true;
    this.searchQuery = this.route.snapshot.params['query'];
    this.getSearchByQuery();
  }

  public getSearchByQuery() {
    if (this.searchQuery != undefined && this.searchQuery.length > 1) {
      this.movieDBService.search(this.searchQuery).subscribe(resultArray => {
        this.totalSearchResult = resultArray[3].length;
        this.hasResult = resultArray[3].length >= 1 ? true : false;
        this.isLoading = false;
      })
    } else {
      // this.movieDBService.getMoviesList
    }
  }

}
