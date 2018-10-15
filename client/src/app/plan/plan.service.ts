import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/index";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) {
  }

  getAllContintesWithCountries(): Observable<any> {
    return this.http.get("http://localhost:8080/continent/get-all").pipe(
      tap(trip => console.log(trip)),
      catchError(this.handleError('getContinents', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
