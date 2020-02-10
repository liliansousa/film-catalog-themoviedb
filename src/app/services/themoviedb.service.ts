import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// interfaceS
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';
import { MovieGenreResponse, MovieGenre } from 'src/common/interface/movie-genre-response.interface';
import { MovieDiscoverResponse } from 'src/common/interface/movie-discover-response.interface.';
import { MovieDetailsResponse } from 'src/common/interface/movie-details-response.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(
    private apiConnect: HttpClient
  ) { }

  // THE MOVIEDB API - GET DATA Service

  private apiUrl: string = environment.themoviedbApiUrl;
  private apiKey: string = '?api_key=' + environment.themoviedbApiKey;
  private language: string = 'pt-BR';
  private errorMessage: string = 'Erro ao consultar dados: tente novamente mais tarde!';

  public movieGenres: MovieGenre[];

  public getMovieGenre() {
    const httpRequest = this.apiUrl + '/genre/movie/list' + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get<MovieGenreResponse>(httpRequest).pipe(
      map(resp => {
        const genres = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            genres.push({ resp })
          }
        }
        return genres;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
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
      if (movieFilter[filter] != null) {
        filterRequest = filterRequest.concat('&' + filter + '=' + movieFilter[filter])
      }
    }

    let httpRequest = requiredRequest + filterRequest;
    return this.apiConnect.get<MovieDiscoverResponse>(httpRequest).pipe(
      map(resp => {
        const moviesArray = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            moviesArray.push(resp[key]);
          }
        }
        return moviesArray;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
      })
    )
  }

  public getMovieDetails(id: number) {
    const httpRequest = this.apiUrl + '/movie/' + id + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get<MovieDetailsResponse>(httpRequest).pipe(
      map(resp => {
        const movie = resp;
        return movie;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
      })
    )
  }

  public trendingMovies() {
    const httpRequest = this.apiUrl + '/trending/movie/week' + this.apiKey;
    return this.apiConnect.get(httpRequest).pipe(
      map(resp => {
        return resp;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
      })
    )
  }

  public search(query: string) {
    const httpRequest = this.apiUrl + '/search/movie' + this.apiKey + '&language=' + this.language + '&query=' + query;
    return this.apiConnect.get<MovieDiscoverResponse>(httpRequest).pipe(
      map(resp => {
        const searchArray = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            searchArray.push(resp[key]);
          }
        }
        return searchArray;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
      })
    )
  }

  public getMovieCredits(movieId: number) {
    const httpRequest = this.apiUrl + '/movie/' + movieId + '/credits' + this.apiKey;
    return this.apiConnect.get(httpRequest).pipe(
      map(resp => {
        const movieCastArray = []
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            movieCastArray.push(resp[key]);
          }
        }
        return movieCastArray;
      }),
      catchError((error) => {
        return throwError(this.errorMessage, error);
      })
    )
  }

}
