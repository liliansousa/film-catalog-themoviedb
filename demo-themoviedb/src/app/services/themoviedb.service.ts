import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationTokenResponse } from 'src/common/interface/authentication-token-response.interface';
import { AuthenticationSessionRequest } from 'src/common/interface/authentication-session-request.interface';
import { MovieDiscoverRequest } from 'src/common/interface/movie-discover-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(
    private apiConnect: HttpClient
  ) { }

  // THE MOVIEDB https://api.themoviedb.org/3/
  // TODO: finish setup

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=18b731d07cfdd6e6cfa6fb048d1e2f0c';
  private language: string = 'pt-BR';

  // ------------------------------------------------------------
  // Authentication
  // ------------------------------------------------------------

  public getNewToken() {
    // Create Request Token
    const httpRequest = this.apiUrl + '/authentication/token/new' + this.apiKey;
    return this.apiConnect.get(httpRequest).subscribe((data: AuthenticationTokenResponse) => { });
  }

  public guestSession() {
    // Create Guest Session
    const httpRequest = this.apiUrl + '/authentication/guest_session/new' + this.apiKey;
    return this.apiConnect.get(httpRequest)
  }

  public getSessionId(requestToken: AuthenticationSessionRequest) {
    // Create Session
    const httpRequest = this.apiUrl + '/authentication/session/new' + this.apiKey;
    return this.apiConnect.post(httpRequest, requestToken)
  }

  public loginSession(username: string, password: string, token: string) {
    // Create Session With Login
    const httpRequest = this.apiUrl + '/authentication/token/validate_with_login' + this.apiKey;
    const bodyRequest = {
      username: username,
      password: password,
      request_token: token
    }
    return this.apiConnect.post(httpRequest, bodyRequest)
  }

  // ------------------------------------------------------------
  // The MovieDB Data Request
  // ------------------------------------------------------------

  public getMoviesCertifications() {
    const httpRequest = this.apiUrl + '/certification/movie/list' + this.apiKey;
    return this.apiConnect.get(httpRequest)
  }

  public getMoviesUpdate() {
    const httpRequest = this.apiUrl + '/movie/changes' + this.apiKey;
    return this.apiConnect.get(httpRequest)
  }

  public getMovieGenre() {
    const httpRequest = this.apiUrl + '/genre/movie/list' + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get(httpRequest)
  }

  public getMovieDetails(id: number) {
    const httpRequest = this.apiUrl + '/movie/' + id + this.apiKey + '&language=' + this.language;
    return this.apiConnect.get(httpRequest)
  }

  public getMoviesList(movieFilter: MovieDiscoverRequest) {
    const requiredRequest = this.apiUrl + '/discover/movie' + this.apiKey + '&language=' + this.language;
    //&sort_by=popularity.desc&include_adult=false&include_video=false&page=2

  }



}
