import {Component, Injectable} from '@angular/core';
import {AuthService} from "./auth/core/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){

  }

  shouldRenderNavBar():boolean{
    return this.authService.isAutheticated();
  }

}
