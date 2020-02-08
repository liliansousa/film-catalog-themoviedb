import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { ActivatedRoute } from '@angular/router';
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
  public searchQuery: string;
  public hasResult: boolean = false;
  public sidebarMessage: string;
  public movieList: MovieDiscoverItem[] = [];

  ngOnInit() {
    this.isLoading = true;
    this.searchQuery = this.route.snapshot.params['query'];
    this.getSearchByQuery();
  }

  public getSearchByQuery() {
    if (this.searchQuery != undefined || this.searchQuery.length > 1) {
      this.movieDBService.search(this.searchQuery).subscribe(resultArray => {
        this.movieList = resultArray[3];
        this.hasResult = this.movieList.length >= 1 ? true : false;
        this.sidebarMessage = 'Total de items encontrados: ' + this.movieList.length;
        this.isLoading = false;
      })
    } else {
      this.sidebarMessage = 'Nenhum resultado para a busca!';
      this.isLoading = false;
    }
  }

}
