import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchQuery: string;
  public hasResult: boolean = false;
  public totalSearchResult: number;

  constructor(
    private movieDBService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.searchQuery = 'teste';
    this.getSearchByQuery();
  }

  public getSearchByQuery() {
    if (this.searchQuery != undefined && this.searchQuery.length > 1) {
      this.movieDBService.search(this.searchQuery).subscribe(resultArray => {
        // resultArray[3] - Array de filmes resultado da busca
        console.log(resultArray[3])
        this.totalSearchResult = resultArray[3].length;
        this.hasResult = resultArray[3].length >= 1 ? true : false;
      })
    }
  }

}
