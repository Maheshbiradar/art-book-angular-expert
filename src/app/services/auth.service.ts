import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user.model';


export interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subAuthUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: String, password: String) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[Key]]',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError),
    tap(response => {
      this.handleAuthentication(response.email, 
        response.localId, 
        response.idToken, 
        +response.expiresIn);
    }))
  }

  logIn(email: String, password: String) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[key]',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError)
    , tap(response => {
      this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn);
    }));
  }

  logout() {
    this.subAuthUser.next(null);
    this.router.navigate(['/auth']);
  }

  handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    let expiration =  new Date(        
      + new Date().getTime() 
      + +expiresIn 
      * 1000);
    let user = new User(email, userId, token, expiration)
    this.subAuthUser.next(user);
  }

  handleError(errResp: HttpErrorResponse) {
    let errorMessage:String = "An Error occured!";
    if(!errResp.error || !errResp.error.error) {
      return throwError(errResp);
    }
    switch(errResp.error.error.message) {
      case "EMAIL_EXISTS" : errorMessage = "Email Already Exists!";
                              break;
     case "EMAIL_NOT_FOUND" : errorMessage = "Email Not Found!";
                              break;
     case "INVALID_PASSWORD" : errorMessage = "Password is invalid!";
                              break;
     case "USER_DISABLED" : errorMessage = "User is disabled!";
                              break;
    }

    return throwError(errorMessage);
  }
  
}
