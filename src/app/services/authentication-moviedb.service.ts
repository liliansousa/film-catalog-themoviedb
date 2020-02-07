import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationTokenResponse } from 'src/common/interface/authentication-token-response.interface';
import { AuthenticationSessionRequest } from 'src/common/interface/authentication-session-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationMovieDBService {

  constructor(
    private apiConnect: HttpClient
  ) { }

  // THE MOVIEDB https://api.themoviedb.org/3/

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '?api_key=18b731d07cfdd6e6cfa6fb048d1e2f0c';

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