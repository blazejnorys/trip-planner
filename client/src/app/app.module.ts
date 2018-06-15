import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './auth/user/user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomMaterialModule} from "./auth/core/material.module";
import {AppRoutingModule} from "./auth/core/app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserService} from "./app.service";
import {AuthService} from "./auth/core/auth.service";
import {Interceptor} from "./auth/core/inteceptor";
import {TokenStorage} from "./auth/core/token.storage"
import    {MatDialogModule, MatDialog} from '@angular/material'
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
      BrowserAnimationsModule,
      CustomMaterialModule,
      AppRoutingModule,
      HttpClientModule,
      OverlayModule,
      MatDialogModule
  ],
  providers: [UserService, AuthService, TokenStorage, TokenStorage, MatDialogModule, MatDialog,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
