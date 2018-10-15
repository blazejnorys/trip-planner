import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate():boolean {
    if(!this.auth.isAnonymous()){
      this.router.navigate(['/main-page']);
      return false;
    }
    return true;
  }
}
