import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

    baseUrl: 'http://localhost:8080/email2sms/';

    constructor(private http: HttpClient) {
    }


    attemptAuth(ussername: string, password: string): Observable<any> {
        const credentials = {username: ussername, password: password};
        console.log('attempAuth ::');
        return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
    }

    isAutheticated(): boolean {
      const token = sessionStorage.getItem('AuthToken');
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(token);
    }

    isAnonymous():boolean{
      const token = sessionStorage.getItem("AuthToken");
      const helper = new JwtHelperService();
      return helper.isTokenExpired(token);
    }

}
