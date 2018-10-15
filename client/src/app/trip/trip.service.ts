import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {catchError, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";
import {Trip} from "../model/trip";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {
  }

  getAllTripsForUser(user:any): Observable<any> {
    return this.http.post("http://localhost:8080/trip/userTrips",user).pipe(
      tap(trip => console.log('fetched trips')),
      catchError(this.handleError('getTrips', []))
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
