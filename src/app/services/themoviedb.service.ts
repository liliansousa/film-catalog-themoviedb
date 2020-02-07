import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// interfaceS
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';
import { MovieGenreResponse, MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { MovieDiscoverResponse } from 'src/common/interface/movie-discover-response.interface.';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(
    private apiConnect: HttpClient
  ) { }

  // THE MOVIEDB https://api.themoviedb.org/3/

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=18b731d07cfdd6e6cfa6fb048d1e2f0c';
  private language: string = 'pt-BR';

  public movieGenres: MovieGenre[];

  public getMoviesCertifications() {
    const httpRequest = this.apiUrl + '/certification/movie/list' + this.apiKey;
    return this.apiConnect.get(httpRequest).subscribe(resp => {
      return resp;
    })
  }

  public getMoviesUpdate() {
    const httpRequest = this.apiUrl + '/movie/changes' + this.apiKey;
    return this.apiConnect.get(httpRequest).subscribe(resp => {
      return resp;
    })
  }

  public getMovieGenre() {
    const httpRequest = this.apiUrl + '/genre/movie/list' + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get<MovieGenreResponse>(httpRequest).pipe(map(
      resp => {
        const genres = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            genres.push({ resp })
          }
        }
        return genres;
      })
    )
  }

  public getMoviesList(movieFilter: MovieDiscoverRequest, gteDate?: string, lteDate?: string) {
    const requiredRequest = this.apiUrl + '/discover/movie' + this.apiKey + '&language=' + this.language;
    let filterRequest = '';
    if (gteDate || lteDate) {
      filterRequest = filterRequest.concat('&primary_release_date.gte=' + gteDate + '&primary_release_date.lte=' + lteDate);
    }

    for (const filter in movieFilter) {
      filterRequest = filterRequest.concat('&' + filter + '=' + movieFilter[filter])
    }

    let httpRequest = requiredRequest + filterRequest;
    return this.apiConnect.get<MovieDiscoverResponse>(httpRequest).pipe(map(
      resp => {
        const moviesArray = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            moviesArray.push(resp[key]);
          }
        }
        return moviesArray;
      })
    )
  }

  public getMovieDetails(id: number) {
    const httpRequest = this.apiUrl + '/movie/' + id + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get(httpRequest).subscribe(resp => {
      return resp;
    })
  }

  public trendingMovies() {
    const httpRequest = this.apiUrl + '/trending/movie/week' + this.apiKey
  }


  public search(query: string) {
    // Search Movies - GET /search/movie
    const httpRequest = this.apiUrl + '/search/movie' + this.apiKey + '&language=' + this.language + '&query=' + query;
    return this.apiConnect.get<MovieDiscoverResponse>(httpRequest).pipe(map(
      resp => {
        const searchArray = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            searchArray.push(resp[key]);
          }
        }
        return searchArray;
      })
    )
  }

  public searchMoviesOnly(query: string) {
    const httpRequest = this.apiUrl + '/search/movie' + this.apiKey + '&language=' + this.language + '&query=' + query;
  }

}
