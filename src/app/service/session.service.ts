import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { baseURL, httpOptions } from '../environments/environment';
import { environment } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  url = baseURL + '/session';

  onCheck = new EventEmitter<any>();

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    }
    return throwError(errorMessage);
  }

  login(loginData: String): Observable<String> {
    if (environment) console.log("SessionService: login");
    return this.http.post<String>(this.url, loginData, httpOptions).pipe(
      tap((u: String) => console.log("session.service login HTTP request executed", u)),
      retry(1),
      catchError(this.handleError));
  }

  // logout(): Observable<String> {
  //   if (environment) console.log("SessionService: logout");
  //   return this.http.delete<String>(this.url, httpOptions).pipe(
  //     retry(1),
  //     catchError(this.handleError));
  // }

  logout(){
    localStorage.clear();
    //location.reload();
  }

  check(): Observable<String> {
    return this.http.get<String>(this.url, httpOptions)
  }
}
