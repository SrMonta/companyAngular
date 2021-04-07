import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginInfo } from '../../data/loginInfo';
import { SignupInfo } from '../../data/signupInfo';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3000/';  // URL to web api
  isLoggedin: boolean = false;
  isAdmin: boolean = false;
  loggedUsername: string;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
    ) { }

  public showLoginButtons(){
    if(this.isAuthenticated()){
      this.isLoggedin = true;
      this.loggedUsername = localStorage.getItem('username');
    }
  }

  /** POST: login to the server */
  login(user: LoginInfo): Observable<LoginInfo> {
      return this.http.post<any>(this.authUrl+'login',user,this.httpOptions)
      .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              //localStorage.setItem('currentUser', JSON.stringify(user));
              localStorage.setItem('username',user.username);
              localStorage.setItem('token', user.token);
              localStorage.setItem('rank',user.rank);
              this.isAdmin = user.rank === 1 ? true : false;
              //sessionStorage.setItem(user.username, user.token);
              this.isLoggedin = true;
              this.loggedUsername = user.username;
            }
            return user;
          }),
      catchError(this.handleError<any>('login'))
      );
  }

  /** POST: register user */
  register(user: SignupInfo): Observable<SignupInfo> {
    return this.http.post<any>(this.authUrl+'signup',user,this.httpOptions)
    .pipe(map(user => {
      console.log(user);
      return user;
    }),
    catchError(this.handleError<any>('signup')));
  }

  public isAuthenticated(): boolean {
    //const token = localStorage.getItem(username);
    //return token ? true : false ;
    return localStorage.getItem('token') ? true : false;
  }

  public getLoggedUsername() {
    return this.loggedUsername;
  }

  // LOGOUT
  logout(){
    this.isLoggedin = false;
    this.loggedUsername = 'no_username';
    localStorage.clear();/*
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    */
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      //window.alert(error.error.errors[0].msg);
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
