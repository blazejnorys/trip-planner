import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './auth/login/login.component';
import {UserComponent} from './user/user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserService} from "./app.service";
import {AuthService} from "./auth/core/auth.service";
import {Interceptor} from "./auth/core/inteceptor";
import {TokenStorage} from "./auth/core/token.storage"
import {ClarityModule, ClrFormsNextModule} from "@clr/angular";
import {MainPageComponent} from './main-page/main-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import {WorldMapComponent} from './world-map/world-map.component';
import {PlanComponent} from './plan/plan.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {TripComponent} from './trip/trip.component';
import {TripDetailsComponent} from './trip/trip-details/trip-details.component';
import {TripAddComponent} from './trip/trip-add/trip-add.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        MainPageComponent,
        HeaderComponent,
        WorldMapComponent,
        PlanComponent,
        AchievementsComponent,
        TripComponent,
        TripDetailsComponent,
        TripAddComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ClarityModule,
        ClrFormsNextModule,
        AppRoutingModule

    ],
    providers: [UserService, AuthService, TokenStorage, TokenStorage, JwtHelperService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
