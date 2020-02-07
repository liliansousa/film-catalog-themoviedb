import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationTokenResponse } from 'src/common/interface/authentication-token-response.interface';
import { AuthenticationSessionRequest } from 'src/common/interface/authentication-session-request.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationMovieDBService {

  constructor(
    private apiConnect: HttpClient
  ) { }

  // THE MOVIEDB https://api.themoviedb.org/3/

  private apiUrl: string = environment.themoviedbApiUrl;
  private apiKey: string = '?api_key=' + environment.themoviedbApiKey;
  private language: string = 'pt-BR';

  // ------------------------------------------------------------
  // Authentication: Not Used in this DEMO
  // ------------------------------------------------------------

  public getNewToken() {
    // Create Request Token
    const httpRequest = this.apiUrl + '/authentication/token/new' + this.apiKey;
    return this.apiConnect.get(httpRequest).subscribe((data: AuthenticationTokenResponse) => { });
  }

  public guestSession() {
    // Create Guest Session
    const httpRequest = this.apiUrl + '/authentication/guest_session/new' + this.apiKey;
    return this.apiConnect.get(httpRequest).subscribe(resp => {
      return resp;
    })
  }

  public getSessionId(requestToken: AuthenticationSessionRequest) {
    // Create Session
    const httpRequest = this.apiUrl + '/authentication/session/new' + this.apiKey;
    return this.apiConnect.post(httpRequest, requestToken).subscribe(resp => {
      return resp;
    })
  }

  public loginSession(username: string, password: string, token: string) {
    // Create Session With Login
    const httpRequest = this.apiUrl + '/authentication/token/validate_with_login' + this.apiKey;
    const bodyRequest = {
      username: username,
      password: password,
      request_token: token
    }
    return this.apiConnect.post(httpRequest, bodyRequest).subscribe(resp => {
      return resp;
    })
  }

}